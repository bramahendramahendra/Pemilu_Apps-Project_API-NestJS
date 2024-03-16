import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { AnyExceptionFilter } from './common/filters/any-exception.filter';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Pilkada')
    .setDescription('API Pilkada')
    .setVersion('1.0')
    // .addTag()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // const customOptions = {
  //   // customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css',
  //   // customJs: 'https://petstore.swagger.io/swagger-ui-bundle.js',
  //   // customJsUrl: 'https://petstore.swagger.io/swagger-ui-standalone-preset.js',
  //   // customJs: 'https://petstore.swagger.io/swagger-initializer.js',
  //   // customCssUrl5: 'https://petstore.swagger.io/index.css',
  //   // customCssUrl6: 'https://petstore.swagger.io/swagger-ui.css',
  // };
  // SwaggerModule.setup('api', app, document, customOptions);

  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'Pilkada API',
    // customfavIcon: 'https://avatars.githubusercontent.com/u/6936373?s=200&v=4',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
    ],
    customCssUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css',
    ],
  });

  // const cors = { ...CorsConfig };
  // app.enableCors(cors);
  // app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // app.setGlobalPrefix('api/v1');
  // useContainer(app.select(AppModule), { fallbackOnErrors: true });

  
  // const cors = { ...CorsConfig };
  // app.enableCors(cors);
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
  app.setGlobalPrefix('api');
  useContainer(app.select(AppModule), { fallbackOnErrors: true });


  await app.listen(3000);
}
bootstrap();
