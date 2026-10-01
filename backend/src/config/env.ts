import 'dotenv/config';

for (const key of ['DATABASE_URL', 'JWT_SECRET']) {
  if (!process.env[key] && process.env.NODE_ENV !== 'test') throw new Error(`Falta la variable de entorno ${key}`);
}
export const env = {
  port: Number(process.env.PORT || 4000),
  jwtSecret: process.env.JWT_SECRET || 'test-secret',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
};
