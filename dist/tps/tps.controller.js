"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TpsController = void 0;
const common_1 = require("@nestjs/common");
const tps_service_1 = require("./tps.service");
const create_tps_dto_1 = require("./dto/create-tps.dto");
const update_tps_dto_1 = require("./dto/update-tps.dto");
const swagger_1 = require("@nestjs/swagger");
let TpsController = class TpsController {
    constructor(tpsService) {
        this.tpsService = tpsService;
    }
    async findAll() {
        return this.tpsService.findAll().catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async search(search) {
        return this.tpsService.findAllBySearch(search).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async findAllByKelurahan(id_kelurahan) {
        return this.tpsService.findAllByKelurahan(id_kelurahan).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async findOne(id) {
        return this.tpsService.findOne(id).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async create(createTpsDto) {
        return this.tpsService.create(createTpsDto);
    }
    async update(id, updateTpsDto) {
        return this.tpsService.update(id, updateTpsDto);
    }
    async remove(id) {
        return this.tpsService.remove(id);
    }
};
exports.TpsController = TpsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TpsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TpsController.prototype, "search", null);
__decorate([
    (0, common_1.Get)('by-kelurahan/:id_kelurahan'),
    __param(0, (0, common_1.Param)('id_kelurahan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TpsController.prototype, "findAllByKelurahan", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TpsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tps_dto_1.CreateTpsDto]),
    __metadata("design:returntype", Promise)
], TpsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_tps_dto_1.UpdateTpsDto]),
    __metadata("design:returntype", Promise)
], TpsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TpsController.prototype, "remove", null);
exports.TpsController = TpsController = __decorate([
    (0, swagger_1.ApiTags)('tps'),
    (0, common_1.Controller)('tps'),
    __metadata("design:paramtypes", [tps_service_1.TpsService])
], TpsController);
//# sourceMappingURL=tps.controller.js.map