import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { PrismaClient } from '../src/generated/prisma';

dotenv.config();

const prisma = new PrismaClient();
const SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS!) || 10;

async function main() {
  // Очистка данных в правильном порядке
  await prisma.$transaction([
    prisma.orderItem.deleteMany(),
    prisma.order.deleteMany(),
    prisma.scheduleSlot.deleteMany(),
    prisma.schedule.deleteMany(),
    prisma.ticketCategory.deleteMany(),
    prisma.tour.deleteMany(),
    prisma.tourType.deleteMany(),
    prisma.discount.deleteMany(),
    prisma.user.deleteMany(),
  ]);

  // Создание типов экскурсий
  const tourTypes = await prisma.tourType.createMany({
    data: [
      { name: 'Пешеходная' },
      { name: 'Водная' },
      { name: 'Автобусная' },
      { name: 'Индивидуальная' },
    ],
  });

  // Получаем созданные типы
  const [walking, water, bus, individual] = await prisma.tourType.findMany();

  // Создание туров
  const tours = await Promise.all([
    prisma.tour.create({
      data: {
        title: 'Москва историческая',
        description: 'Обзорная экскурсия по центру Москвы',
        typeId: walking.id,
        basePrice: 1000,
      },
    }),
    prisma.tour.create({
      data: {
        title: 'Вдоль по Москва-реке',
        description: 'Прогулка на теплоходе по Москве-реке',
        typeId: water.id,
        basePrice: 1500,
      },
    }),
  ]);

  // Создание категорий билетов
  await prisma.ticketCategory.createMany({
    data: [
      // Для первого тура
      { name: 'Взрослый', price: 1000, tourId: tours[0].id },
      { name: 'Дети до 14', price: 600, tourId: tours[0].id },
      { name: 'Пенсионеры', price: 700, tourId: tours[0].id },

      // Для второго тура
      { name: 'Взрослый', price: 1500, tourId: tours[1].id },
      { name: 'Студенты', price: 900, tourId: tours[1].id },
      { name: 'Группы от 10 чел.', price: 1200, tourId: tours[1].id },
    ],
  });

  // Создание расписаний
  await prisma.schedule.createMany({
    data: [
      {
        tourId: tours[0].id,
        startDate: new Date('2025-05-20'),
        endDate: new Date('2025-06-20'),
        maxPeople: 20,
      },
      {
        tourId: tours[1].id,
        startDate: new Date('2025-06-01'),
        endDate: new Date('2025-07-01'),
        maxPeople: 15,
      },
    ],
  });

  // Добавление временных слотов
  const schedules = await prisma.schedule.findMany();
  await prisma.scheduleSlot.createMany({
    data: [
      // Для первого расписания
      { scheduleId: schedules[0].id, weekDay: 2, time: '14:00' },
      { scheduleId: schedules[0].id, weekDay: 3, time: '15:00' },

      // Для второго расписания
      { scheduleId: schedules[1].id, weekDay: 5, time: '18:00' },
      { scheduleId: schedules[1].id, weekDay: 6, time: '16:00' },
    ],
  });

  // Создание пользователей с хешированными паролями
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
  ]);

  // Создание тестовых заказов
  const ticketCategories = await prisma.ticketCategory.findMany();

  await prisma.order.create({
    data: {
      userId: users[1].id,
      totalPrice: 2600,
      items: {
        create: [
          {
            ticketCategoryId: ticketCategories[0].id,
            quantity: 2,
            price: 1000,
          },
          {
            ticketCategoryId: ticketCategories[3].id,
            quantity: 1,
            price: 1500,
          },
        ],
      },
    },
  });

  // Создание скидок
  await prisma.discount.createMany({
    data: [
      {
        code: 'SUMMER2025',
        value: 15,
        isPercent: true,
        validFrom: new Date('2025-06-01'),
        validTo: new Date('2025-09-01'),
      },
      {
        code: 'EARLYBIRD',
        value: 500,
        isPercent: false,
        validFrom: new Date(),
        validTo: new Date('2025-12-31'),
      },
    ],
  });

  console.log('✅ База данных успешно заполнена!');
}

main()
  .catch((e) => {
    console.error('❌ Ошибка заполнения БД:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
