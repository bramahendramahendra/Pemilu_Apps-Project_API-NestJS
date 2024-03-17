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
exports.KabupatenController = void 0;
const common_1 = require("@nestjs/common");
const kabupaten_service_1 = require("./kabupaten.service");
const create_kabupaten_dto_1 = require("./dto/create-kabupaten.dto");
const update_kabupaten_dto_1 = require("./dto/update-kabupaten.dto");
const swagger_1 = require("@nestjs/swagger");
let KabupatenController = class KabupatenController {
    constructor(kabupatenService) {
        this.kabupatenService = kabupatenService;
    }
    async findAll() {
        return this.kabupatenService.findAll().catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async search(search) {
        return this.kabupatenService.findAllBySearch(search).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async findAllByProvinsi(id_provinsi) {
        return this.kabupatenService.findAllByProvinsi(id_provinsi).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async findOne(id) {
        return this.kabupatenService.findOne(id).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async create(createKabupatenDto) {
        return this.kabupatenService.create(createKabupatenDto);
    }
    async update(id, updateKabupatenDto) {
        return this.kabupatenService.update(id, updateKabupatenDto);
    }
    async remove(id) {
        return this.kabupatenService.remove(id);
    }
};
exports.KabupatenController = KabupatenController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KabupatenController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], KabupatenController.prototype, "search", null);
__decorate([
    (0, common_1.Get)('by-provinsi/:id_provinsi'),
    __param(0, (0, common_1.Param)('id_provinsi')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KabupatenController.prototype, "findAllByProvinsi", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KabupatenController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_kabupaten_dto_1.CreateKabupatenDto]),
    __metadata("design:returntype", Promise)
], KabupatenController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_kabupaten_dto_1.UpdateKabupatenDto]),
    __metadata("design:returntype", Promise)
], KabupatenController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KabupatenController.prototype, "remove", null);
exports.KabupatenController = KabupatenController = __decorate([
    (0, swagger_1.ApiTags)('kabupaten'),
    (0, common_1.Controller)('kabupaten'),
    __metadata("design:paramtypes", [kabupaten_service_1.KabupatenService])
], KabupatenController);
//# sourceMappingURL=kabupaten.controller.js.map