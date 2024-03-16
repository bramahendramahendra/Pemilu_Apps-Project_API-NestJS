import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { AnyExceptionFilter } from './common/filters/any-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Pilkada')
    .setDescription('API Pilkada')
    .setVersion('1.0')
    // .addTag()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const customOptions = {
    customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css',
    // customJs: 'https://petstore.swagger.io/swagger-ui-bundle.js',
    // customJsUrl: 'https://petstore.swagger.io/swagger-ui-standalone-preset.js',
    customJs: 'https://petstore.swagger.io/swagger-initializer.js',
    // customCssUrl5: 'https://petstore.swagger.io/index.css',
    // customCssUrl6: 'https://petstore.swagger.io/swagger-ui.css',
  };
  SwaggerModule.setup('api', app, document, customOptions);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    exceptionFactory: (errors) => {
      const messages = errors.map(
        (error) => `${error.property} has wrong value ${error.value}, ${Object.values(error.constraints).join(', ')}`
      );
      return new Error(messages.join('; '));
    },
  }));

  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new AnyExceptionFilter());


  await app.listen(3000);
}
bootstrap();
