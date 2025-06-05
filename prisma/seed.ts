import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { PrismaClient } from '../src/generated/prisma';

dotenv.config();

const prisma = new PrismaClient();
const SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS!) || 10;

const images = [
  'https://images.unsplash.com/photo-1714842498650-53d45e04937d',
  'https://images.unsplash.com/photo-1520106212299-d99c443e4568',
  'https://images.unsplash.com/photo-1523509433743-6f42a58221df',
  'https://plus.unsplash.com/premium_photo-1697729938237-680e72596e15',
  'https://images.unsplash.com/photo-1531168738274-aa9955d5033f',
];

async function main() {
  console.log('🧹 Очистка базы данных...');
  await prisma.$transaction([
    prisma.orderItem.deleteMany(),
    prisma.order.deleteMany(),
    prisma.scheduleSlot.deleteMany(),
    prisma.schedule.deleteMany(),
    prisma.ticketCategory.deleteMany(),
    prisma.excursionImage.deleteMany(),
    prisma.excursion.deleteMany(),
    prisma.excursionType.deleteMany(),
    prisma.discount.deleteMany(),
    prisma.user.deleteMany(),
  ]);

  console.log('📁 Создание типов экскурсий...');
  await prisma.excursionType.createMany({
    data: [
      { name: 'Пешеходная' },
      { name: 'Водная' },
      { name: 'Автобусная' },
      { name: 'Индивидуальная' },
    ],
  });

  const types = await prisma.excursionType.findMany({
    orderBy: { name: 'asc' },
  });
  const [walking, water, bus, individual] = types;

  console.log('🖼 Создание экскурсий с изображениями...');
  const excursions = await Promise.all([
    prisma.excursion.create({
      data: {
        title: 'Москва историческая',
        description: 'Обзорная экскурсия по центру Москвы',
        typeId: walking.id,
        basePrice: 1000,
        currency: 'RUB',
        mainImage: images[0],
        images: {
          create: [{ url: images[1] }, { url: images[2] }],
        },
      },
    }),
    prisma.excursion.create({
      data: {
        title: 'Вдоль по Москва-реке',
        description: 'Прогулка на теплоходе по Москве-реке',
        typeId: water.id,
        basePrice: 1500,
        currency: 'RUB',
        mainImage: images[3],
        images: {
          create: [{ url: images[4] }, { url: images[0] }],
        },
      },
    }),
    prisma.excursion.create({
      data: {
        title: 'Автобусный тур по Москве',
        description:
          'Комфортабельный автобусный тур по главным достопримечательностям',
        typeId: bus.id,
        basePrice: 2000,
        currency: 'RUB',
        mainImage: images[1],
        images: {
          create: [{ url: images[2] }, { url: images[3] }],
        },
      },
    }),
  ]);

  console.log('🎟 Создание категорий билетов...');
  const ticketCategories = [];
  for (const excursion of excursions) {
    let categories;
    if (excursion.title.includes('историческая')) {
      categories = [
        { name: 'Взрослый', price: 1000 },
        { name: 'Дети до 14', price: 600 },
        { name: 'Пенсионеры', price: 700 },
      ];
    } else if (excursion.title.includes('Москва-реке')) {
      categories = [
        { name: 'Взрослый', price: 1500 },
        { name: 'Студенты', price: 900 },
        { name: 'Группы от 10 чел.', price: 1200 },
      ];
    } else {
      categories = [
        { name: 'Стандарт', price: 2000 },
        { name: 'Льготный', price: 1500 },
        { name: 'VIP', price: 3500 },
      ];
    }

    for (const category of categories) {
      const created = await prisma.ticketCategory.create({
        data: {
          ...category,
          excursionId: excursion.id,
        },
      });
      ticketCategories.push(created);
    }
  }

  console.log('📆 Создание расписаний...');
  const schedules = [];
  for (const excursion of excursions) {
    let scheduleData;
    if (excursion.title.includes('историческая')) {
      scheduleData = {
        startDate: new Date('2025-05-20'),
        endDate: new Date('2025-06-20'),
      };
    } else if (excursion.title.includes('Москва-реке')) {
      scheduleData = {
        startDate: new Date('2025-06-01'),
        endDate: new Date('2025-07-01'),
      };
    } else {
      scheduleData = {
        startDate: new Date('2025-07-01'),
        endDate: new Date('2025-08-01'),
      };
    }

    const schedule = await prisma.schedule.create({
      data: {
        ...scheduleData,
        excursionId: excursion.id,
        status: 'ACTIVE',
      },
    });
    schedules.push(schedule);
  }

  console.log('🕒 Добавление временных слотов...');
  const slots = [];
  for (const schedule of schedules) {
    let slotData;
    if (schedule.startDate.getMonth() === 4) {
      // Май
      slotData = [
        { weekDay: 2, time: '14:00', maxPeople: 20 },
        { weekDay: 3, time: '15:00', maxPeople: 15 },
        { weekDay: 5, time: '11:00', maxPeople: 25 },
      ];
    } else if (schedule.startDate.getMonth() === 5) {
      // Июнь
      slotData = [
        { weekDay: 4, time: '12:00', maxPeople: 30 },
        { weekDay: 5, time: '18:00', maxPeople: 15 },
        { weekDay: 6, time: '16:00', maxPeople: 20 },
      ];
    } else {
      // Июль
      slotData = [
        { weekDay: 1, time: '10:00', maxPeople: 40 },
        { weekDay: 3, time: '14:00', maxPeople: 40 },
        { weekDay: 6, time: '12:00', maxPeople: 35 },
      ];
    }

    for (const slot of slotData) {
      const created = await prisma.scheduleSlot.create({
        data: {
          ...slot,
          scheduleId: schedule.id,
        },
      });
      slots.push(created);
    }
  }

  console.log('👥 Создание пользователей...');
  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: 'admin@mskburo.ru',
        password: await bcrypt.hash('SecureAdmin123!', SALT_ROUNDS),
        name: 'Администратор',
        role: 'ADMIN',
        refreshTokens: [],
      },
    }),
    prisma.user.create({
      data: {
        email: 'user1@example.com',
        password: await bcrypt.hash('UserPass123!', SALT_ROUNDS),
        name: 'Анна Иванова',
        role: 'USER',
        refreshTokens: [],
      },
    }),
    prisma.user.create({
      data: {
        email: 'guide1@mskburo.ru',
        password: await bcrypt.hash('GuidePass123!', SALT_ROUNDS),
        name: 'Иван Петров',
        role: 'GUIDE',
        refreshTokens: [],
      },
    }),
  ]);

  console.log('🏷 Добавление скидок...');
  const discounts = await prisma.discount.createMany({
    data: [
      {
        code: 'SUMMER2025',
        value: 15,
        isPercent: true,
        validFrom: new Date('2025-06-01'),
        validTo: new Date('2025-09-01'),
        maxUses: 100,
        minOrderAmount: 2000,
      },
      {
        code: 'EARLYBIRD',
        value: 500,
        isPercent: false,
        validFrom: new Date(),
        validTo: new Date('2025-12-31'),
        maxUses: 50,
        minOrderAmount: 3000,
      },
      {
        code: 'WELCOME10',
        value: 10,
        isPercent: true,
        validFrom: new Date(),
        validTo: new Date('2026-01-01'),
        maxUses: null, // Без ограничений
      },
    ],
  });

  const summerDiscount = await prisma.discount.findFirst({
    where: { code: 'SUMMER2025' },
  });

  console.log('🧾 Создание тестовых заказов...');
  // Заказ без скидки (для авторизованного пользователя)
  await prisma.order.create({
    data: {
      userId: users[1].id,
      contactName: 'Анна Иванова',
      contactEmail: 'user1@example.com',
      contactPhone: '+79991234567',
      totalPrice: 2600,
      items: {
        create: [
          {
            ticketCategoryId: ticketCategories[0].id,
            quantity: 2,
            price: 1000,
            scheduleSlotId: slots[0].id,
          },
          {
            ticketCategoryId: ticketCategories[3].id,
            quantity: 1,
            price: 1500,
            scheduleSlotId: slots[3].id,
          },
        ],
      },
    },
  });

  // Заказ со скидкой (для авторизованного пользователя)
  await prisma.order.create({
    data: {
      userId: users[1].id,
      contactName: 'Анна Иванова',
      contactEmail: 'user1@example.com',
      contactPhone: '+79991234567',
      totalPrice: 4800,
      discountId: summerDiscount?.id,
      discountAmount: 720, // 15% от 4800
      status: 'PAID',
      items: {
        create: [
          {
            ticketCategoryId: ticketCategories[5].id,
            quantity: 3,
            price: 1600,
            scheduleSlotId: slots[5].id,
          },
        ],
      },
    },
  });

  // Заказ с VIP билетами (для администратора)
  await prisma.order.create({
    data: {
      userId: users[0].id,
      contactName: 'Администратор',
      contactEmail: 'admin@mskburo.ru',
      contactPhone: '+79998887766',
      totalPrice: 10500,
      status: 'PAID',
      emailSent: true,
      items: {
        create: [
          {
            ticketCategoryId: ticketCategories[8].id, // VIP
            quantity: 3,
            price: 3500,
            scheduleSlotId: slots[7].id,
          },
        ],
      },
    },
  });

  // Гостевой заказ (без пользователя)
  await prisma.order.create({
    data: {
      contactName: 'Петр Сидоров',
      contactEmail: 'guest@example.com',
      contactPhone: '+79995554433',
      totalPrice: 3000,
      status: 'PENDING',
      items: {
        create: [
          {
            ticketCategoryId: ticketCategories[1].id,
            quantity: 2,
            price: 600,
            scheduleSlotId: slots[2].id,
          },
          {
            ticketCategoryId: ticketCategories[2].id,
            quantity: 1,
            price: 700,
            scheduleSlotId: slots[2].id,
          },
        ],
      },
    },
  });

  // Обновляем счетчик использований скидки
  if (summerDiscount) {
    await prisma.discount.update({
      where: { id: summerDiscount.id },
      data: { usedCount: 1 },
    });
  }

  console.log('✅ База данных успешно заполнена!');
  console.log('🔑 Администратор:', users[0].email);
  console.log('👤 Обычный пользователь:', users[1].email);
  console.log('🚩 Гид:', users[2].email);
  console.log('🎫 Количество экскурсий:', excursions.length);
  console.log('⏱ Количество слотов:', slots.length);
  console.log('💳 Количество заказов:', 4); // Обновили счетчик заказов
  console.log('🏷 Количество скидок:', 3);
}

main()
  .catch((e) => {
    console.error('❌ Ошибка заполнения БД:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
