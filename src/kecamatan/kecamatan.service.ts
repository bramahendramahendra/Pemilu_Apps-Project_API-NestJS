import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kecamatan } from './kecamatan.entity';
import { CreateKecamatanDto } from './dto/create-kecamatan.dto';
import { UpdateKecamatanDto } from './dto/update-kecamatan.dto';

@Injectable()
export class KecamatanService {
    constructor(
        @InjectRepository(Kecamatan)
        private kecamatanRepository: Repository<Kecamatan>,
    ) { }

    async findAll(): Promise<Kecamatan[]> {
        return this.kecamatanRepository.find();
    }

    async findOne(id: number): Promise<Kecamatan> {
        const kecamatan = await this.kecamatanRepository.findOneBy({ id });
        if (!kecamatan) {
            throw new NotFoundException(`Kecamatan with ID "${id}" not found`);
        }
        return kecamatan;
    }

    async create(createKecamatanDto: CreateKecamatanDto): Promise<Kecamatan> {
        const kecamatan = this.kecamatanRepository.create(createKecamatanDto);
        await this.kecamatanRepository.save(kecamatan);
        return kecamatan;
    }

    async update(id: number, updateKecamatanDto: UpdateKecamatanDto): Promise<Kecamatan> {
        const kecamatan = await this.findOne(id);
        Object.assign(kecamatan, updateKecamatanDto);
        await this.kecamatanRepository.save(kecamatan);
        return kecamatan;
    }

    async remove(id: number): Promise<void> {
        const result = await this.kecamatanRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Kecamatan with ID "${id}" not found`);
        }
    }
}
