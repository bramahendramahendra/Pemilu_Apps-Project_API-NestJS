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
exports.KandidatController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const kandidat_service_1 = require("./kandidat.service");
const create_kandidat_dto_1 = require("./dto/create-kandidat.dto");
const update_kandidat_dto_1 = require("./dto/update-kandidat.dto");
let KandidatController = class KandidatController {
    constructor(KandidatService) {
        this.KandidatService = KandidatService;
    }
    async findAll() {
        return this.KandidatService.findAll().catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async search(search) {
        return this.KandidatService.findAllBySearch(search).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async findAllByPartai(id_partai) {
        return this.KandidatService.findAllByPartai(id_partai).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async findOne(id) {
        return this.KandidatService.findOne(id).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async create(createKandidatDto) {
        return this.KandidatService.create(createKandidatDto);
    }
    async update(id, updateKandidatDto) {
        return this.KandidatService.update(id, updateKandidatDto);
    }
    async remove(id) {
        return this.KandidatService.remove(id);
    }
};
exports.KandidatController = KandidatController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KandidatController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], KandidatController.prototype, "search", null);
__decorate([
    (0, common_1.Get)('by-partai/:id_partai'),
    __param(0, (0, common_1.Param)('id_partai')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KandidatController.prototype, "findAllByPartai", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KandidatController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_kandidat_dto_1.CreateKandidatDto]),
    __metadata("design:returntype", Promise)
], KandidatController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_kandidat_dto_1.UpdateKandidatDto]),
    __metadata("design:returntype", Promise)
], KandidatController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KandidatController.prototype, "remove", null);
exports.KandidatController = KandidatController = __decorate([
    (0, swagger_1.ApiTags)('kandidat'),
    (0, common_1.Controller)('kandidat'),
    __metadata("design:paramtypes", [kandidat_service_1.KandidatService])
], KandidatController);
//# sourceMappingURL=kandidat.controller.js.map