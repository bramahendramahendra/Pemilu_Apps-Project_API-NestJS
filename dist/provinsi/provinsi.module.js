"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvinsiModule = void 0;
const common_1 = require("@nestjs/common");
const provinsi_controller_1 = require("./provinsi.controller");
const provinsi_service_1 = require("./provinsi.service");
const typeorm_1 = require("@nestjs/typeorm");
const provinsi_entity_1 = require("./provinsi.entity");
let ProvinsiModule = class ProvinsiModule {
};
exports.ProvinsiModule = ProvinsiModule;
exports.ProvinsiModule = ProvinsiModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([provinsi_entity_1.Provinsi])],
        controllers: [provinsi_controller_1.ProvinsiController],
        providers: [provinsi_service_1.ProvinsiService]
    })
], ProvinsiModule);
//# sourceMappingURL=provinsi.module.js.map