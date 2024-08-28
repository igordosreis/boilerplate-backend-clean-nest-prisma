import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import AppModule from './AppModule';

async function bootstrap() {
  const port = Number(process.env.PORT) || 3007;
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters();
  await app.listen(port, () => { console.log(`Running server on port: ${port}`); });
}

bootstrap();
