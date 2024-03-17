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
exports.PartaiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const partai_service_1 = require("./partai.service");
const create_partai_dto_1 = require("./dto/create-partai.dto");
const update_partai_dto_1 = require("./dto/update-partai.dto");
let PartaiController = class PartaiController {
    constructor(PartaiService) {
        this.PartaiService = PartaiService;
    }
    async findAll() {
        return this.PartaiService.findAll().catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async search(search) {
        return this.PartaiService.findAllBySearch(search).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async findOne(id) {
        return this.PartaiService.findOne(id).catch((e) => {
            throw new common_1.NotFoundException(e.message);
        });
    }
    async create(createPartaiDto) {
        return this.PartaiService.create(createPartaiDto);
    }
    async update(id, updatePartaiDto) {
        return this.PartaiService.update(id, updatePartaiDto);
    }
    async remove(id) {
        return this.PartaiService.remove(id);
    }
};
exports.PartaiController = PartaiController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PartaiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PartaiController.prototype, "search", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PartaiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_partai_dto_1.CreatePartaiDto]),
    __metadata("design:returntype", Promise)
], PartaiController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_partai_dto_1.UpdatePartaiDto]),
    __metadata("design:returntype", Promise)
], PartaiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PartaiController.prototype, "remove", null);
exports.PartaiController = PartaiController = __decorate([
    (0, swagger_1.ApiTags)('partai'),
    (0, common_1.Controller)('partai'),
    __metadata("design:paramtypes", [partai_service_1.PartaiService])
], PartaiController);
//# sourceMappingURL=partai.controller.js.map