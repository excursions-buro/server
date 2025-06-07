import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.example.com';
const SMTP_PORT = Number(process.env.SMTP_PORT) || 465;
const SMTP_USER = process.env.SMTP_USER || 'user@example.com';
const SMTP_PASS = process.env.SMTP_PASS || 'password';

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true, // для 465
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: process.env.NODE_ENV === 'production',
  },
  connectionTimeout: 10000,
  greetingTimeout: 5000,
});

export const sendVerificationCodeEmail = async (to: string, code: string) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Код подтверждения</h2>
      <p>Здравствуйте!</p>
      <p>Ваш код подтверждения: <strong>${code}</strong></p>
      <p>Код действителен в течение 5 минут.</p>
      <p>Если это были не вы, просто проигнорируйте это письмо.</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Ваш Сервис" <${SMTP_USER}>`,
      to,
      subject: 'Код подтверждения',
      html,
    });
  } catch (error) {
    console.error('Ошибка отправки письма с кодом подтверждения:', error);
    throw error;
  }
};
