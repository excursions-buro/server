import { prisma } from '../../utils/prisma';

export const getExcursions = async (filters: ExcursionFilters) => {
  const where: any = {};

  if (filters.typeId) where.typeId = filters.typeId;

  if (filters.priceMin !== undefined || filters.priceMax !== undefined) {
    where.basePrice = {};
    if (filters.priceMin !== undefined) where.basePrice.gte = filters.priceMin;
    if (filters.priceMax !== undefined) where.basePrice.lte = filters.priceMax;
  }

  if (filters.title) {
    where.title = {
      contains: filters.title,
      mode: 'insensitive',
    };
  }

  if (filters.date) {
    where.schedules = {
      some: {
        startDate: { lte: filters.date },
        endDate: { gte: filters.date },
      },
    };
  }

  if (filters.peopleCount) {
    where.schedules = where.schedules || {};
    where.schedules.some = where.schedules.some || {};
    where.schedules.some.slots = {
      some: {
        maxPeople: { gte: filters.peopleCount },
      },
    };
  }

  return prisma.excursion.findMany({
    where,
    include: {
      images: true,
      tickets: true,
      schedules: {
        include: {
          slots: true,
        },
      },
      type: true,
    },
    orderBy: { createdAt: 'desc' },
  });
};

export const getExcursionById = async (id: string) => {
  return prisma.excursion.findUnique({
    where: { id },
    include: {
      images: true,
      tickets: true,
      schedules: {
        include: {
          slots: true,
        },
      },
      type: true,
    },
  });
};

export const getExcursionTypes = async () => {
  return prisma.excursionType.findMany();
};
