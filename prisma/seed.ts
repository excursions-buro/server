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

  const [walking, water] = await prisma.excursionType.findMany({
    orderBy: { name: 'asc' },
    take: 2,
  });

  console.log('🖼 Создание экскурсий с изображениями...');
  const excursions = await Promise.all([
    prisma.excursion.create({
      data: {
        title: 'Москва историческая',
        description: 'Обзорная экскурсия по центру Москвы',
        typeId: walking.id,
        basePrice: 1000,
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
        mainImage: images[3],
        images: {
          create: [{ url: images[4] }, { url: images[0] }],
        },
      },
    }),
  ]);

  console.log('🎟 Создание категорий билетов...');
  await prisma.ticketCategory.createMany({
    data: [
      { name: 'Взрослый', price: 1000, excursionId: excursions[0].id },
      { name: 'Дети до 14', price: 600, excursionId: excursions[0].id },
      { name: 'Пенсионеры', price: 700, excursionId: excursions[0].id },
      { name: 'Взрослый', price: 1500, excursionId: excursions[1].id },
      { name: 'Студенты', price: 900, excursionId: excursions[1].id },
      { name: 'Группы от 10 чел.', price: 1200, excursionId: excursions[1].id },
    ],
  });

  console.log('📆 Создание расписаний...');
  await prisma.schedule.createMany({
    data: [
      {
        excursionId: excursions[0].id,
        startDate: new Date('2025-05-20'),
        endDate: new Date('2025-06-20'),
        maxPeople: 20,
      },
      {
        excursionId: excursions[1].id,
        startDate: new Date('2025-06-01'),
        endDate: new Date('2025-07-01'),
        maxPeople: 15,
      },
    ],
  });

  const schedules = await prisma.schedule.findMany();

  console.log('🕒 Добавление временных слотов...');
  await prisma.scheduleSlot.createMany({
    data: [
      { scheduleId: schedules[0].id, weekDay: 2, time: '14:00' },
      { scheduleId: schedules[0].id, weekDay: 3, time: '15:00' },
      { scheduleId: schedules[1].id, weekDay: 5, time: '18:00' },
      { scheduleId: schedules[1].id, weekDay: 6, time: '16:00' },
    ],
  });

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
  ]);

  const ticketCategories = await prisma.ticketCategory.findMany();

  console.log('🧾 Создание тестового заказа...');
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

  console.log('🏷 Добавление скидок...');
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
