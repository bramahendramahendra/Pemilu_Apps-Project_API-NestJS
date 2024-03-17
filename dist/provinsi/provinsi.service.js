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
exports.ProvinsiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const provinsi_entity_1 = require("./provinsi.entity");
const typeorm_2 = require("typeorm");
let ProvinsiService = class ProvinsiService {
    constructor(provinsiRepository) {
        this.provinsiRepository = provinsiRepository;
    }
    async findAll() {
        return this.provinsiRepository.find();
    }
    async findOne(id) {
        const provinsi = await this.provinsiRepository.findOneBy({ id });
        if (!provinsi) {
            throw new common_1.NotFoundException(`Provinsi with ID "${id}" not found`);
        }
        return provinsi;
    }
    async findAllBySearch(search) {
        const queryBuilder = this.provinsiRepository.createQueryBuilder('provinsi');
        if (search) {
            queryBuilder.andWhere('provinsi.nama LIKE :search', { search: `%${search}%` });
        }
        const provinsi = await queryBuilder.getMany();
        if (!provinsi || provinsi.length === 0) {
            throw new common_1.NotFoundException(`Provinsi not found`);
        }
        return provinsi;
    }
    async create(createProvinsiDto) {
        const existing = await this.provinsiRepository.findOne({
            where: { nama: createProvinsiDto.nama },
        });
        if (existing) {
            throw new Error('Provinsi name already exists');
        }
        const provinsi = this.provinsiRepository.create(createProvinsiDto);
        await this.provinsiRepository.save(provinsi);
        return provinsi;
    }
    async update(id, updateProvinsiDto) {
        const existing = await this.provinsiRepository.findOne({
            where: { nama: updateProvinsiDto.nama },
        });
        if (existing && existing.id !== id) {
            throw new Error('Provinsi name already exists');
        }
        const provinsi = await this.findOne(id);
        Object.assign(provinsi, updateProvinsiDto);
        await this.provinsiRepository.save(provinsi);
        return provinsi;
    }
    async remove(id) {
        try {
            await this.provinsiRepository.delete(id);
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError) {
                throw new Error('Cannot delete Provinsi as it is referenced by one or more districts');
            }
            throw error;
        }
    }
};
exports.ProvinsiService = ProvinsiService;
exports.ProvinsiService = ProvinsiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(provinsi_entity_1.Provinsi)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProvinsiService);
//# sourceMappingURL=provinsi.service.js.map