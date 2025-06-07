import { Order } from '../../generated/prisma';
import { prisma } from '../../utils/prisma';

export const getOrderById = async (id: string): Promise<Order | null> => {
  return prisma.order.findUnique({
    where: { id },
    include: {
      items: {
        include: {
          ticketCategory: true,
          scheduleSlot: true,
        },
      },
    },
  });
};

export const getOrdersByUser = async (userId: string): Promise<Order[]> => {
  return prisma.order.findMany({
    where: { userId },
    include: {
      items: {
        include: {
          ticketCategory: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });
};
