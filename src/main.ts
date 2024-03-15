import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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
    customJs: 'https://petstore.swagger.io/swagger-ui-bundle.js',
    customJsUrl: 'https://petstore.swagger.io/swagger-ui-standalone-preset.js',
    // customCssUrl4: 'https://petstore.swagger.io/swagger-initializer.js',
    // customCssUrl5: 'https://petstore.swagger.io/index.css',
    // customCssUrl6: 'https://petstore.swagger.io/swagger-ui.css',
  };
  SwaggerModule.setup('api', app, document, customOptions);

  await app.listen(3000);
}
bootstrap();
