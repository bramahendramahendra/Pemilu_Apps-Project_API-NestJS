"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KecamatanModule = void 0;
const common_1 = require("@nestjs/common");
const kecamatan_controller_1 = require("./kecamatan.controller");
const kecamatan_service_1 = require("./kecamatan.service");
const kecamatan_entity_1 = require("./kecamatan.entity");
const typeorm_1 = require("@nestjs/typeorm");
let KecamatanModule = class KecamatanModule {
};
exports.KecamatanModule = KecamatanModule;
exports.KecamatanModule = KecamatanModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([kecamatan_entity_1.Kecamatan])],
        controllers: [kecamatan_controller_1.KecamatanController],
        providers: [kecamatan_service_1.KecamatanService]
    })
], KecamatanModule);
//# sourceMappingURL=kecamatan.module.js.map