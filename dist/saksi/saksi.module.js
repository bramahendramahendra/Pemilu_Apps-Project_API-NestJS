"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaksiModule = void 0;
const common_1 = require("@nestjs/common");
const saksi_controller_1 = require("./saksi.controller");
const saksi_service_1 = require("./saksi.service");
const saksi_entity_1 = require("./saksi.entity");
const typeorm_1 = require("@nestjs/typeorm");
let SaksiModule = class SaksiModule {
};
exports.SaksiModule = SaksiModule;
exports.SaksiModule = SaksiModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([saksi_entity_1.Saksi])],
        controllers: [saksi_controller_1.SaksiController],
        providers: [saksi_service_1.SaksiService]
    })
], SaksiModule);
//# sourceMappingURL=saksi.module.js.map