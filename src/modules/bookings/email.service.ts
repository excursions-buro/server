import nodemailer from 'nodemailer';
import QRCode from 'qrcode';

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.example.com';
const SMTP_PORT = Number(process.env.SMTP_PORT) || 465;
const SMTP_USER = process.env.SMTP_USER || 'user@example.com';
const SMTP_PASS = process.env.SMTP_PASS || 'password';

// Исправленные настройки транспорта
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true, // Для порта 465 должно быть true
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: process.env.NODE_ENV === 'production', // Только в production проверять сертификаты
  },
  connectionTimeout: 10000, // Таймаут подключения 10 секунд
  greetingTimeout: 5000, // Таймаут приветствия 5 секунд
});

interface BookingEmailParams {
  to: string;
  orderId: string;
  contactName: string;
  excursionTitle: string;
  excursionDescription: string;
  excursionDate: string;
  excursionTime: string;
  tickets: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  totalPrice: number;
}

export async function sendBookingEmail(params: BookingEmailParams) {
  const qrData = `Заказ: ${params.orderId}\nЭкскурсия: ${params.excursionTitle}\nДата: ${params.excursionDate} ${params.excursionTime}`;
  const qrCode = await QRCode.toDataURL(qrData);

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Подтверждение бронирования</h2>
      <p>Здравствуйте, ${params.contactName}!</p>
      <p>Ваше бронирование на экскурсию <strong>${
        params.excursionTitle
      }</strong> успешно оформлено.</p>
      
      <h3>Детали заказа (#${params.orderId})</h3>
      <ul>
        ${params.tickets
          .map(
            (ticket) => `
          <li>
            ${ticket.name}: ${
              ticket.quantity
            } шт. × ${ticket.price.toLocaleString('ru-RU')} ₽
          </li>`
          )
          .join('')}
      </ul>
      <p><strong>Итого: ${params.totalPrice.toLocaleString(
        'ru-RU'
      )} ₽</strong></p>
      
      <h3>Информация об экскурсии</h3>
      <p><strong>Дата:</strong> ${params.excursionDate}</p>
      <p><strong>Время:</strong> ${params.excursionTime}</p>
      
      <p>QR-код для регистрации:</p>
      <img src="${qrCode}" alt="QR Code" style="display: block; margin: 20px auto;"/>
      
      <p>Спасибо за ваш заказ!</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Экскурсионный сервис" <${SMTP_USER}>`, // Используем SMTP_USER как отправителя
      to: params.to,
      subject: `Подтверждение бронирования: ${params.excursionTitle}`,
      html,
      attachments: [
        {
          filename: 'qrcode.png',
          content: qrCode.split('base64,')[1],
          encoding: 'base64',
        },
      ],
    });
  } catch (error) {
    console.error('Ошибка отправки письма:', {
      error,
      host: SMTP_HOST,
      port: SMTP_PORT,
      user: SMTP_USER,
    });
    throw error;
  }
}
