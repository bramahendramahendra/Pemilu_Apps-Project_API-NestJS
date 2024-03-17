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
exports.SaksiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const saksi_entity_1 = require("./saksi.entity");
const typeorm_2 = require("typeorm");
let SaksiService = class SaksiService {
    constructor(saksiRepository) {
        this.saksiRepository = saksiRepository;
    }
    async findAll() {
        const saksi = await this.saksiRepository.find();
        if (!saksi || saksi.length === 0) {
            throw new common_1.NotFoundException(`Saksi not found`);
        }
        return saksi;
    }
    async findOne(id) {
        const saksi = await this.saksiRepository.findOneBy({ id });
        if (!saksi) {
            throw new common_1.NotFoundException(`Saksi with ID "${id}" not found`);
        }
        return saksi;
    }
    async findAllByTps(id_tps) {
        const tps = await this.saksiRepository.find({
            where: { id_tps }
        });
        if (!tps || tps.length === 0) {
            throw new common_1.NotFoundException(`Saksi with TPS ID "${id_tps}" not found`);
        }
        return tps;
    }
    async findAllByKandidat(id_kandidat) {
        const kandidat = await this.saksiRepository.find({
            where: { id_kandidat }
        });
        if (!kandidat || kandidat.length === 0) {
            throw new common_1.NotFoundException(`Saksi with Kandidat ID "${id_kandidat}" not found`);
        }
        return kandidat;
    }
    async findAllBySearch(search) {
        const queryBuilder = this.saksiRepository.createQueryBuilder('saksi');
        if (search) {
            queryBuilder.andWhere('saksi.nama LIKE :search OR saksi.deskripsi LIKE :search', { search: `%${search}%` });
        }
        const saksi = await queryBuilder.getMany();
        if (!saksi || saksi.length === 0) {
            throw new common_1.NotFoundException(`Saksi not found`);
        }
        return saksi;
    }
    async create(createSaksiDto) {
        const existing = await this.saksiRepository.findOne({
            where: { nama: createSaksiDto.nama },
        });
        if (existing) {
            throw new Error('Saksi name already exists');
        }
        const saksi = this.saksiRepository.create(createSaksiDto);
        await this.saksiRepository.save(saksi);
        return saksi;
    }
    async update(id, updateSaksiDto) {
        const existing = await this.saksiRepository.findOne({
            where: { nama: updateSaksiDto.nama },
        });
        if (existing && existing.id !== id) {
            throw new Error('Saksi name already exists');
        }
        const saksi = await this.findOne(id);
        Object.assign(saksi, updateSaksiDto);
        await this.saksiRepository.save(saksi);
        return saksi;
    }
    async remove(id) {
        try {
            await this.saksiRepository.delete(id);
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError) {
                throw new Error('Cannot delete Saksi as it is referenced by one or more districts');
            }
            throw error;
        }
    }
};
exports.SaksiService = SaksiService;
exports.SaksiService = SaksiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(saksi_entity_1.Saksi)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SaksiService);
//# sourceMappingURL=saksi.service.js.map