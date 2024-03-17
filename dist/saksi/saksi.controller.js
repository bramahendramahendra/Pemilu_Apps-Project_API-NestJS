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
exports.SaksiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const saksi_service_1 = require("./saksi.service");
const create_saksi_dto_1 = require("./dto/create-saksi.dto");
const update_saksi_dto_1 = require("./dto/update-saksi.dto");
let SaksiController = class SaksiController {
    constructor(SaksiService) {
        this.SaksiService = SaksiService;
    }
    async findAll() {
        return this.SaksiService.findAll().catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async search(search) {
        return this.SaksiService.findAllBySearch(search).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async findAllByTps(id_tps) {
        return this.SaksiService.findAllByTps(id_tps).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async findAllByKandidat(id_kandidat) {
        return this.SaksiService.findAllByKandidat(id_kandidat).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async findOne(id) {
        return this.SaksiService.findOne(id).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async create(createSaksiDto) {
        return this.SaksiService.create(createSaksiDto);
    }
    async update(id, updateSaksiDto) {
        return this.SaksiService.update(id, updateSaksiDto);
    }
    async remove(id) {
        return this.SaksiService.remove(id);
    }
};
exports.SaksiController = SaksiController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SaksiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SaksiController.prototype, "search", null);
__decorate([
    (0, common_1.Get)('by-tps/:id_tps'),
    __param(0, (0, common_1.Param)('id_tps')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SaksiController.prototype, "findAllByTps", null);
__decorate([
    (0, common_1.Get)('by-partai/:id_kandidat'),
    __param(0, (0, common_1.Param)('id_kandidat')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SaksiController.prototype, "findAllByKandidat", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SaksiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_saksi_dto_1.CreateSaksiDto]),
    __metadata("design:returntype", Promise)
], SaksiController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_saksi_dto_1.UpdateSaksiDto]),
    __metadata("design:returntype", Promise)
], SaksiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SaksiController.prototype, "remove", null);
exports.SaksiController = SaksiController = __decorate([
    (0, swagger_1.ApiTags)('saksi'),
    (0, common_1.Controller)('saksi'),
    __metadata("design:paramtypes", [saksi_service_1.SaksiService])
], SaksiController);
//# sourceMappingURL=saksi.controller.js.map