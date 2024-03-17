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
exports.KandidatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const kandidat_entity_1 = require("./kandidat.entity");
let KandidatService = class KandidatService {
    constructor(kandidatRepository) {
        this.kandidatRepository = kandidatRepository;
    }
    async findAll() {
        const kandidat = await this.kandidatRepository.find();
        if (!kandidat || kandidat.length === 0) {
            throw new common_1.NotFoundException(`Kandidat not found`);
        }
        return kandidat;
    }
    async findOne(id) {
        const kandidat = await this.kandidatRepository.findOneBy({ id });
        if (!kandidat) {
            throw new common_1.NotFoundException(`Kandidat with ID "${id}" not found`);
        }
        return kandidat;
    }
    async findAllByPartai(id_partai) {
        const kandidat = await this.kandidatRepository.find({
            where: { id_partai }
        });
        if (!kandidat || kandidat.length === 0) {
            throw new common_1.NotFoundException(`Kandidat with Partai ID "${id_partai}" not found`);
        }
        return kandidat;
    }
    async findAllBySearch(search) {
        const queryBuilder = this.kandidatRepository.createQueryBuilder('kandidat');
        if (search) {
            queryBuilder.andWhere('kandidat.nama LIKE :search OR kandidat.deskripsi LIKE :search', { search: `%${search}%` });
        }
        const kandidat = await queryBuilder.getMany();
        if (!kandidat || kandidat.length === 0) {
            throw new common_1.NotFoundException(`Kandidat not found`);
        }
        return kandidat;
    }
    async create(createKandidatDto) {
        const existing = await this.kandidatRepository.findOne({
            where: { nama: createKandidatDto.nama },
        });
        if (existing) {
            throw new Error('Kandidat name already exists');
        }
        const kandidat = this.kandidatRepository.create(createKandidatDto);
        await this.kandidatRepository.save(kandidat);
        return kandidat;
    }
    async update(id, updateKandidatDto) {
        const existing = await this.kandidatRepository.findOne({
            where: { nama: updateKandidatDto.nama },
        });
        if (existing && existing.id !== id) {
            throw new Error('Kandidat name already exists');
        }
        const kandidat = await this.findOne(id);
        Object.assign(kandidat, updateKandidatDto);
        await this.kandidatRepository.save(kandidat);
        return kandidat;
    }
    async remove(id) {
        try {
            await this.kandidatRepository.delete(id);
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError) {
                throw new Error('Cannot delete Kandidat as it is referenced by one or more districts');
            }
            throw error;
        }
    }
};
exports.KandidatService = KandidatService;
exports.KandidatService = KandidatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(kandidat_entity_1.Kandidat)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], KandidatService);
//# sourceMappingURL=kandidat.service.js.map