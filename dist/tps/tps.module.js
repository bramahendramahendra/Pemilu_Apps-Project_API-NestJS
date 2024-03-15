"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TpsModule = void 0;
const common_1 = require("@nestjs/common");
const tps_controller_1 = require("./tps.controller");
const tps_service_1 = require("./tps.service");
const typeorm_1 = require("@nestjs/typeorm");
const tps_entity_1 = require("./tps.entity");
let TpsModule = class TpsModule {
};
exports.TpsModule = TpsModule;
exports.TpsModule = TpsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tps_entity_1.TPS])],
        controllers: [tps_controller_1.TpsController],
        providers: [tps_service_1.TpsService]
    })
], TpsModule);
//# sourceMappingURL=tps.module.js.map