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
exports.KecamatanController = void 0;
const common_1 = require("@nestjs/common");
const kecamatan_service_1 = require("./kecamatan.service");
const create_kecamatan_dto_1 = require("./dto/create-kecamatan.dto");
const update_kecamatan_dto_1 = require("./dto/update-kecamatan.dto");
const swagger_1 = require("@nestjs/swagger");
let KecamatanController = class KecamatanController {
    constructor(kecamatanService) {
        this.kecamatanService = kecamatanService;
    }
    async findAll() {
        return this.kecamatanService.findAll().catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async search(search) {
        return this.kecamatanService.findAllBySearch(search).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async findAllByKabupaten(id_kabupaten) {
        return this.kecamatanService.findAllByKabupaten(id_kabupaten).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async findOne(id) {
        return this.kecamatanService.findOne(id).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async create(createKecamatanDto) {
        return this.kecamatanService.create(createKecamatanDto);
    }
    async update(id, updateKecamatanDto) {
        return this.kecamatanService.update(id, updateKecamatanDto);
    }
    async remove(id) {
        return this.kecamatanService.remove(id);
    }
};
exports.KecamatanController = KecamatanController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KecamatanController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], KecamatanController.prototype, "search", null);
__decorate([
    (0, common_1.Get)('by-kabupaten/:id_kabupaten'),
    __param(0, (0, common_1.Param)('id_kabupaten')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KecamatanController.prototype, "findAllByKabupaten", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KecamatanController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_kecamatan_dto_1.CreateKecamatanDto]),
    __metadata("design:returntype", Promise)
], KecamatanController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_kecamatan_dto_1.UpdateKecamatanDto]),
    __metadata("design:returntype", Promise)
], KecamatanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KecamatanController.prototype, "remove", null);
exports.KecamatanController = KecamatanController = __decorate([
    (0, swagger_1.ApiTags)('kecamatan'),
    (0, common_1.Controller)('kecamatan'),
    __metadata("design:paramtypes", [kecamatan_service_1.KecamatanService])
], KecamatanController);
//# sourceMappingURL=kecamatan.controller.js.map