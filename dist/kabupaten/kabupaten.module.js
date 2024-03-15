"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KabupatenModule = void 0;
const common_1 = require("@nestjs/common");
const kabupaten_controller_1 = require("./kabupaten.controller");
const kabupaten_service_1 = require("./kabupaten.service");
const typeorm_1 = require("@nestjs/typeorm");
const kabupaten_entity_1 = require("./kabupaten.entity");
let KabupatenModule = class KabupatenModule {
};
exports.KabupatenModule = KabupatenModule;
exports.KabupatenModule = KabupatenModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([kabupaten_entity_1.Kabupaten])],
        controllers: [kabupaten_controller_1.KabupatenController],
        providers: [kabupaten_service_1.KabupatenService]
    })
], KabupatenModule);
//# sourceMappingURL=kabupaten.module.js.map