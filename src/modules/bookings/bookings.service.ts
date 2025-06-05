import { prisma } from '../../utils/prisma';

export const getBookedSeats = async (scheduleId: string, slotTime: string) => {
  const slot = await prisma.scheduleSlot.findFirst({
    where: {
      scheduleId,
      time: slotTime,
    },
    include: {
      orderItems: true,
    },
  });

  if (!slot) {
    return 0;
  }

  return slot.orderItems.reduce((sum, item) => sum + item.quantity, 0);
};

export const createBooking = async (
  excursionId: string,
  bookingData: {
    scheduleId: string;
    slotTime: string;
    tickets: { id: string; count: number }[];
    contact: { name: string; email: string; phone?: string };
  }
) => {
  // Находим слот с проверкой расписания
  const slot = await prisma.scheduleSlot.findFirst({
    where: {
      scheduleId: bookingData.scheduleId,
      time: bookingData.slotTime,
    },
    include: {
      orderItems: true,
      schedule: {
        select: {
          excursionId: true,
        },
      },
    },
  });

  if (!slot) {
    throw new Error('Временной слот не найден');
  }

  // Проверяем принадлежность слота к экскурсии
  if (slot.schedule.excursionId !== excursionId) {
    throw new Error('Слот не принадлежит указанной экскурсии');
  }

  // Рассчитываем занятые места
  const bookedSeats = slot.orderItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Рассчитываем запрашиваемое количество мест
  const requestedSeats = bookingData.tickets.reduce(
    (sum, ticket) => sum + ticket.count,
    0
  );

  // Проверяем доступность мест
  if (bookedSeats + requestedSeats > slot.maxPeople) {
    throw new Error('Недостаточно свободных мест');
  }

  // Получаем цены билетов одним запросом
  const ticketIds = bookingData.tickets.map((t) => t.id);
  const ticketCategories = await prisma.ticketCategory.findMany({
    where: { id: { in: ticketIds } },
    select: { id: true, price: true },
  });

  // Создаем карту цен для быстрого доступа
  const ticketPriceMap = new Map(
    ticketCategories.map((tc) => [tc.id, tc.price])
  );

  // Рассчитываем общую стоимость
  const totalPrice = bookingData.tickets.reduce((sum, ticket) => {
    const price = ticketPriceMap.get(ticket.id) || 0;
    return sum + price * ticket.count;
  }, 0);

  // Подготавливаем данные для элементов заказа
  const itemsData = bookingData.tickets.map((ticket) => {
    const price = ticketPriceMap.get(ticket.id) || 0;
    return {
      quantity: ticket.count,
      price,
      ticketCategoryId: ticket.id,
      scheduleSlotId: slot.id,
    };
  });

  // Создаем заказ с контактной информацией
  const order = await prisma.order.create({
    data: {
      totalPrice,
      status: 'PENDING',
      contactName: bookingData.contact.name,
      contactEmail: bookingData.contact.email,
      contactPhone: bookingData.contact.phone || null,
      items: {
        create: itemsData,
      },
    },
    include: {
      items: true,
    },
  });

  return order;
};
