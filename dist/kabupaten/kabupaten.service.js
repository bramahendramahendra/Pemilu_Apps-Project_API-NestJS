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
exports.KabupatenService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const kabupaten_entity_1 = require("./kabupaten.entity");
const typeorm_2 = require("typeorm");
let KabupatenService = class KabupatenService {
    constructor(kabupatenRepository) {
        this.kabupatenRepository = kabupatenRepository;
    }
    async findAll() {
        return this.kabupatenRepository.find();
    }
    async findOne(id) {
        const kabupaten = await this.kabupatenRepository.findOneBy({ id });
        if (!kabupaten) {
            throw new common_1.NotFoundException(`Kabupaten with ID "${id}" not found`);
        }
        return kabupaten;
    }
    async create(createKabupatenDto) {
        const existing = await this.kabupatenRepository.findOne({
            where: { nama: createKabupatenDto.nama },
        });
        if (existing) {
            throw new Error('Kabupaten name already exists');
        }
        const kabupaten = this.kabupatenRepository.create(createKabupatenDto);
        await this.kabupatenRepository.save(kabupaten);
        return kabupaten;
    }
    async update(id, updateKabupatenDto) {
        const existing = await this.kabupatenRepository.findOne({
            where: { nama: updateKabupatenDto.nama },
        });
        if (existing && existing.id !== id) {
            throw new Error('Kabupaten name already exists');
        }
        const kabupaten = await this.findOne(id);
        Object.assign(kabupaten, updateKabupatenDto);
        await this.kabupatenRepository.save(kabupaten);
        return kabupaten;
    }
    async remove(id) {
        try {
            await this.kabupatenRepository.delete(id);
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError) {
                throw new Error('Cannot delete Kabupaten as it is referenced by one or more districts');
            }
            throw error;
        }
    }
};
exports.KabupatenService = KabupatenService;
exports.KabupatenService = KabupatenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(kabupaten_entity_1.Kabupaten)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], KabupatenService);
//# sourceMappingURL=kabupaten.service.js.map