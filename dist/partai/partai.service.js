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
exports.PartaiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const partai_entity_1 = require("./partai.entity");
const typeorm_2 = require("typeorm");
let PartaiService = class PartaiService {
    constructor(partaiRepository) {
        this.partaiRepository = partaiRepository;
    }
    async findAll() {
        return this.partaiRepository.find();
    }
    async findOne(id) {
        const partai = await this.partaiRepository.findOneBy({ id });
        if (!partai) {
            throw new common_1.NotFoundException(`Partai with ID "${id}" not found`);
        }
        return partai;
    }
    async create(createPartaiDto) {
        const existing = await this.partaiRepository.findOne({
            where: { nama: createPartaiDto.nama },
        });
        if (existing) {
            throw new Error('Partai name already exists');
        }
        const partai = this.partaiRepository.create(createPartaiDto);
        await this.partaiRepository.save(partai);
        return partai;
    }
    async update(id, updatePartaiDto) {
        const existing = await this.partaiRepository.findOne({
            where: { nama: updatePartaiDto.nama },
        });
        if (existing && existing.id !== id) {
            throw new Error('Partai name already exists');
        }
        const partai = await this.findOne(id);
        Object.assign(partai, updatePartaiDto);
        await this.partaiRepository.save(partai);
        return partai;
    }
    async remove(id) {
        try {
            await this.partaiRepository.delete(id);
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError) {
                throw new Error('Cannot delete Partai as it is referenced by one or more districts');
            }
            throw error;
        }
    }
};
exports.PartaiService = PartaiService;
exports.PartaiService = PartaiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(partai_entity_1.Partai)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PartaiService);
//# sourceMappingURL=partai.service.js.map