import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe());

  // Permitir requisições do front
  app.enableCors({
    origin: 'http://localhost:5173',
  });

  // Servir a pasta "uploads" como arquivos estáticos
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads', // acessivel por http://localhost:3000/uploads/zzz.png
  });

  await app.listen(configService.get<number>('PORT') ?? 3000);
}
bootstrap();
