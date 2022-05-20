import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidateInputPipe());
  const options = new DocumentBuilder()
    .setTitle('AutoLeap')
    .setVersion('0.0.1')
    .addTag('v1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.enableCors({ origin: "http://localhost:4200", exposedHeaders: 'x-access-token,Content-Type,Origin,Accept' })
  await app.listen(process.env.PORT || 3000);
}
bootstrap();