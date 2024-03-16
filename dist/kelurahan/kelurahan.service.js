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
exports.KelurahanService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const kelurahan_entity_1 = require("./kelurahan.entity");
const typeorm_2 = require("typeorm");
let KelurahanService = class KelurahanService {
    constructor(kelurahanRepository) {
        this.kelurahanRepository = kelurahanRepository;
    }
    async findAll() {
        return this.kelurahanRepository.find();
    }
    async findOne(id) {
        const kelurahan = await this.kelurahanRepository.findOneBy({ id });
        if (!kelurahan) {
            throw new common_1.NotFoundException(`Kelurahan with ID "${id}" not found`);
        }
        return kelurahan;
    }
    async create(createKelurahanDto) {
        const existing = await this.kelurahanRepository.findOne({
            where: { nama: createKelurahanDto.nama },
        });
        if (existing) {
            throw new Error('Kelurahan name already exists');
        }
        const kelurahan = this.kelurahanRepository.create(createKelurahanDto);
        await this.kelurahanRepository.save(kelurahan);
        return kelurahan;
    }
    async update(id, updateKelurahanDto) {
        const existing = await this.kelurahanRepository.findOne({
            where: { nama: updateKelurahanDto.nama },
        });
        if (existing && existing.id !== id) {
            throw new Error('Kelurahan name already exists');
        }
        const kelurahan = await this.findOne(id);
        Object.assign(kelurahan, updateKelurahanDto);
        await this.kelurahanRepository.save(kelurahan);
        return kelurahan;
    }
    async remove(id) {
        try {
            await this.kelurahanRepository.delete(id);
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError) {
                throw new Error('Cannot delete Kelurahan as it is referenced by one or more districts');
            }
            throw error;
        }
    }
};
exports.KelurahanService = KelurahanService;
exports.KelurahanService = KelurahanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(kelurahan_entity_1.Kelurahan)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], KelurahanService);
//# sourceMappingURL=kelurahan.service.js.map