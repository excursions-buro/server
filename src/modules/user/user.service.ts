import { prisma } from '../../utils/prisma';

export const getUserByIdWithOrders = async (userId: string) => {
  return prisma.user.findUnique({
    where: { id: userId },
    include: {
      orders: true,
    },
  });
};

export const updateUserName = async (userId: string, name: string) => {
  return prisma.user.update({
    where: { id: userId },
    data: { name },
  });
};
