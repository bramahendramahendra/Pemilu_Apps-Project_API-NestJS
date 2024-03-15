"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KelurahanModule = void 0;
const common_1 = require("@nestjs/common");
const kelurahan_controller_1 = require("./kelurahan.controller");
const kelurahan_service_1 = require("./kelurahan.service");
const typeorm_1 = require("@nestjs/typeorm");
const kelurahan_entity_1 = require("./kelurahan.entity");
let KelurahanModule = class KelurahanModule {
};
exports.KelurahanModule = KelurahanModule;
exports.KelurahanModule = KelurahanModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([kelurahan_entity_1.Kelurahan])],
        controllers: [kelurahan_controller_1.KelurahanController],
        providers: [kelurahan_service_1.KelurahanService]
    })
], KelurahanModule);
//# sourceMappingURL=kelurahan.module.js.map