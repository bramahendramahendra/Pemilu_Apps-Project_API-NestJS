"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartaiModule = void 0;
const common_1 = require("@nestjs/common");
const partai_controller_1 = require("./partai.controller");
const partai_service_1 = require("./partai.service");
const typeorm_1 = require("@nestjs/typeorm");
const partai_entity_1 = require("./partai.entity");
let PartaiModule = class PartaiModule {
};
exports.PartaiModule = PartaiModule;
exports.PartaiModule = PartaiModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([partai_entity_1.Partai])],
        controllers: [partai_controller_1.PartaiController],
        providers: [partai_service_1.PartaiService]
    })
], PartaiModule);
//# sourceMappingURL=partai.module.js.map