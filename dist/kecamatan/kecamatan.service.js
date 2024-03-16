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
exports.KecamatanService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const kecamatan_entity_1 = require("./kecamatan.entity");
let KecamatanService = class KecamatanService {
    constructor(kecamatanRepository) {
        this.kecamatanRepository = kecamatanRepository;
    }
    async findAll() {
        return this.kecamatanRepository.find();
    }
    async findOne(id) {
        const kecamatan = await this.kecamatanRepository.findOneBy({ id });
        if (!kecamatan) {
            throw new common_1.NotFoundException(`Kecamatan with ID "${id}" not found`);
        }
        return kecamatan;
    }
    async create(createKecamatanDto) {
        const existing = await this.kecamatanRepository.findOne({
            where: { nama: createKecamatanDto.nama },
        });
        if (existing) {
            throw new Error('Kecamatan name already exists');
        }
        const kecamatan = this.kecamatanRepository.create(createKecamatanDto);
        await this.kecamatanRepository.save(kecamatan);
        return kecamatan;
    }
    async update(id, updateKecamatanDto) {
        const existing = await this.kecamatanRepository.findOne({
            where: { nama: updateKecamatanDto.nama },
        });
        if (existing && existing.id !== id) {
            throw new Error('Kecamatan name already exists');
        }
        const kecamatan = await this.findOne(id);
        Object.assign(kecamatan, updateKecamatanDto);
        await this.kecamatanRepository.save(kecamatan);
        return kecamatan;
    }
    async remove(id) {
        try {
            await this.kecamatanRepository.delete(id);
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError) {
                throw new Error('Cannot delete Kecamatan as it is referenced by one or more districts');
            }
            throw error;
        }
    }
};
exports.KecamatanService = KecamatanService;
exports.KecamatanService = KecamatanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(kecamatan_entity_1.Kecamatan)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], KecamatanService);
//# sourceMappingURL=kecamatan.service.js.map