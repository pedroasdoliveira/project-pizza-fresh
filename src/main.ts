import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); // validation

  const config = new DocumentBuilder() // Swagger
    .setTitle('PizzaFresh')
    .setDescription('Aplicação para gestão das mesas de uma pizzaria')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('table')
    .addTag('product')
    .addTag('users')
    .addTag('order')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3100);
}

bootstrap();
