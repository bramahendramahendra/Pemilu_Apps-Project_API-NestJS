"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Pilkada')
        .setDescription('API Pilkada')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    const customOptions = {
        customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css',
        customJs: 'https://petstore.swagger.io/swagger-initializer.js',
    };
    swagger_1.SwaggerModule.setup('api', app, document, customOptions);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map