import { PrismaClient } from '../src/generated/prisma';
const prisma = new PrismaClient();

async function main() {
  // Очистка
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.scheduleSlot.deleteMany();
  await prisma.schedule.deleteMany();
  await prisma.ticketCategory.deleteMany();
  await prisma.tour.deleteMany();
  await prisma.tourType.deleteMany();
  await prisma.user.deleteMany();
  await prisma.discount.deleteMany();

  // Типы экскурсий
  const [walking, water, bus, individual] = await Promise.all([
    prisma.tourType.create({ data: { name: 'Пешеходная' } }),
    prisma.tourType.create({ data: { name: 'Водная' } }),
    prisma.tourType.create({ data: { name: 'Автобусная' } }),
    prisma.tourType.create({ data: { name: 'Индивидуальная' } }),
  ]);

  // Пример туров
  const [tour1, tour2] = await Promise.all([
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

  // Категории билетов для первого тура
  await prisma.ticketCategory.createMany({
    data: [
      { name: 'Взрослый', price: 1000, tourId: tour1.id },
      { name: 'Дети до 14', price: 600, tourId: tour1.id },
      { name: 'Пенсионеры', price: 700, tourId: tour1.id },
      { name: 'Инвалиды', price: 500, tourId: tour1.id },
    ],
  });

  // Категории билетов для второго тура
  await prisma.ticketCategory.createMany({
    data: [
      { name: 'Взрослый', price: 1500, tourId: tour2.id },
      { name: 'Студенты', price: 900, tourId: tour2.id },
      { name: 'Группы от 10 человек', price: 1200, tourId: tour2.id },
    ],
  });

  // Расписание для tour1
  await prisma.schedule.create({
    data: {
      tourId: tour1.id,
      startDate: new Date('2025-05-20'),
      endDate: new Date('2025-06-20'),
      maxPeople: 20,
      slots: {
        create: [
          { weekDay: 2, time: '14:00' }, // вторник
          { weekDay: 3, time: '15:00' }, // среда
          { weekDay: 3, time: '17:00' },
        ],
      },
    },
  });

  // Расписание для tour2 с ограничением и другим временем
  await prisma.schedule.create({
    data: {
      tourId: tour2.id,
      startDate: new Date('2025-06-01'),
      endDate: new Date('2025-07-01'),
      maxPeople: 15,
      slots: {
        create: [
          { weekDay: 5, time: '18:00' }, // пятница
          { weekDay: 6, time: '16:00' }, // суббота
        ],
      },
    },
  });

  // Пользователи
  await prisma.user.createMany({
    data: [
      {
        email: 'admin@mskburo.ru',
        password: 'hashed-password-here',
        name: 'Admin',
        role: 'ADMIN',
      },
      {
        email: 'user1@example.com',
        password: 'hashed-password-user1',
        name: 'Анна Иванова',
        role: 'USER',
      },
      {
        email: 'user2@example.com',
        password: 'hashed-password-user2',
        name: 'Петр Сидоров',
        role: 'USER',
      },
    ],
  });

  // Скидки
  await prisma.discount.createMany({
    data: [
      {
        code: 'WELCOME10',
        value: 10,
        isPercent: true,
        validFrom: new Date(),
        validTo: new Date(new Date().setMonth(new Date().getMonth() + 1)),
      },
      {
        code: 'GROUP5',
        value: 5,
        isPercent: false,
        validFrom: new Date(),
        validTo: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      },
    ],
  });

  console.log('✅ Расширенное наполнение БД завершено.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
