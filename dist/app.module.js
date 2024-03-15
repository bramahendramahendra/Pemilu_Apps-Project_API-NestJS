"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const provinsi_module_1 = require("./provinsi/provinsi.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const kabupaten_module_1 = require("./kabupaten/kabupaten.module");
const kecamatan_module_1 = require("./kecamatan/kecamatan.module");
const kelurahan_module_1 = require("./kelurahan/kelurahan.module");
const tps_module_1 = require("./tps/tps.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env.development',
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: process.env.DB_TYPE,
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT, 10),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: process.env.DB_SYNCHRONIZE === 'true',
            }),
            provinsi_module_1.ProvinsiModule, kabupaten_module_1.KabupatenModule, kecamatan_module_1.KecamatanModule, kelurahan_module_1.KelurahanModule, tps_module_1.TpsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map