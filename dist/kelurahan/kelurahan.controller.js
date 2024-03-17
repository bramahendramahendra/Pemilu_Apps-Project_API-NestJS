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
exports.KelurahanController = void 0;
const common_1 = require("@nestjs/common");
const kelurahan_service_1 = require("./kelurahan.service");
const create_kelurahan_dto_1 = require("./dto/create-kelurahan.dto");
const update_kelurahan_dto_1 = require("./dto/update-kelurahan.dto");
const swagger_1 = require("@nestjs/swagger");
let KelurahanController = class KelurahanController {
    constructor(kelurahanService) {
        this.kelurahanService = kelurahanService;
    }
    async findAll() {
        return this.kelurahanService.findAll().catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async search(search) {
        return this.kelurahanService.findAllBySearch(search).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async findAllByKecamatan(id_kecamatan) {
        return this.kelurahanService.findAllByKecamatan(id_kecamatan).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async findOne(id) {
        return this.kelurahanService.findOne(id).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async create(createKelurahanDto) {
        return this.kelurahanService.create(createKelurahanDto);
    }
    async update(id, updateKelurahanDto) {
        return this.kelurahanService.update(id, updateKelurahanDto);
    }
    async remove(id) {
        return this.kelurahanService.remove(id);
    }
};
exports.KelurahanController = KelurahanController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KelurahanController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], KelurahanController.prototype, "search", null);
__decorate([
    (0, common_1.Get)('by-kecamatan/:id_kecamatan'),
    __param(0, (0, common_1.Param)('id_kecamatan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KelurahanController.prototype, "findAllByKecamatan", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KelurahanController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_kelurahan_dto_1.CreateKelurahanDto]),
    __metadata("design:returntype", Promise)
], KelurahanController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_kelurahan_dto_1.UpdateKelurahanDto]),
    __metadata("design:returntype", Promise)
], KelurahanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KelurahanController.prototype, "remove", null);
exports.KelurahanController = KelurahanController = __decorate([
    (0, swagger_1.ApiTags)('kelurahan'),
    (0, common_1.Controller)('kelurahan'),
    __metadata("design:paramtypes", [kelurahan_service_1.KelurahanService])
], KelurahanController);
//# sourceMappingURL=kelurahan.controller.js.map