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
exports.ProvinsiController = void 0;
const common_1 = require("@nestjs/common");
const provinsi_service_1 = require("./provinsi.service");
const create_provinsi_dto_1 = require("./dto/create-provinsi.dto");
const update_provinsi_dto_1 = require("./dto/update-provinsi.dto");
const swagger_1 = require("@nestjs/swagger");
let ProvinsiController = class ProvinsiController {
    constructor(provinsiService) {
        this.provinsiService = provinsiService;
    }
    async findAll() {
        return this.provinsiService.findAll().catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async search(search) {
        return this.provinsiService.findAllBySearch(search).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async findOne(id) {
        return this.provinsiService.findOne(id).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async create(createProvinsiDto) {
        return this.provinsiService.create(createProvinsiDto);
    }
    async update(id, updateProvinsiDto) {
        return this.provinsiService.update(id, updateProvinsiDto);
    }
    async remove(id) {
        return this.provinsiService.remove(id);
    }
};
exports.ProvinsiController = ProvinsiController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProvinsiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProvinsiController.prototype, "search", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProvinsiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_provinsi_dto_1.CreateProvinsiDto]),
    __metadata("design:returntype", Promise)
], ProvinsiController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_provinsi_dto_1.UpdateProvinsiDto]),
    __metadata("design:returntype", Promise)
], ProvinsiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProvinsiController.prototype, "remove", null);
exports.ProvinsiController = ProvinsiController = __decorate([
    (0, swagger_1.ApiTags)('provinsi'),
    (0, common_1.Controller)('provinsi'),
    __metadata("design:paramtypes", [provinsi_service_1.ProvinsiService])
], ProvinsiController);
//# sourceMappingURL=provinsi.controller.js.map