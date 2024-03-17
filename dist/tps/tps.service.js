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
exports.TpsService = void 0;
const common_1 = require("@nestjs/common");
const tps_entity_1 = require("./tps.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let TpsService = class TpsService {
    constructor(tpsRepository) {
        this.tpsRepository = tpsRepository;
    }
    async findAll() {
        const tps = await this.tpsRepository.find();
        if (!tps || tps.length === 0) {
            throw new common_1.NotFoundException(`TPS not found`);
        }
        return tps;
    }
    async findOne(id) {
        const tps = await this.tpsRepository.findOneBy({ id });
        if (!tps) {
            throw new common_1.NotFoundException(`TPS with ID "${id}" not found`);
        }
        return tps;
    }
    async findAllByKelurahan(id_kelurahan) {
        const tps = await this.tpsRepository.find({
            where: { id_kelurahan }
        });
        if (!tps || tps.length === 0) {
            throw new common_1.NotFoundException(`TPS with Kelurahan ID "${id_kelurahan}" not found`);
        }
        return tps;
    }
    async findAllBySearch(search) {
        const queryBuilder = this.tpsRepository.createQueryBuilder('tps');
        if (search) {
            queryBuilder.andWhere('tps.nama LIKE :search OR tps.alamat LIKE :search', { search: `%${search}%` });
        }
        const tps = await queryBuilder.getMany();
        if (!tps || tps.length === 0) {
            throw new common_1.NotFoundException(`TPS not found`);
        }
        return tps;
    }
    async create(createTpsDto) {
        const existing = await this.tpsRepository.findOne({
            where: { nama: createTpsDto.nama },
        });
        if (existing) {
            throw new Error('Tps name already exists');
        }
        const tps = this.tpsRepository.create(createTpsDto);
        await this.tpsRepository.save(tps);
        return tps;
    }
    async update(id, updateTpsDto) {
        const existing = await this.tpsRepository.findOne({
            where: { nama: updateTpsDto.nama },
        });
        if (existing && existing.id !== id) {
            throw new Error('Tps name already exists');
        }
        const tps = await this.findOne(id);
        Object.assign(tps, updateTpsDto);
        await this.tpsRepository.save(tps);
        return tps;
    }
    async remove(id) {
        try {
            await this.tpsRepository.delete(id);
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError) {
                throw new Error('Cannot delete Tps as it is referenced by one or more districts');
            }
            throw error;
        }
    }
};
exports.TpsService = TpsService;
exports.TpsService = TpsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tps_entity_1.TPS)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TpsService);
//# sourceMappingURL=tps.service.js.map