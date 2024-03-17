import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, QueryFailedError, Repository } from 'typeorm';
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
        const kecamatan = await this.kecamatanRepository.find();
        if (!kecamatan || kecamatan.length === 0) {
            throw new NotFoundException(`Kecamatan not found`);
        }
        return kecamatan;
    }

    async findOne(id: number): Promise<Kecamatan> {
        const kecamatan = await this.kecamatanRepository.findOneBy({ id });
        if (!kecamatan) {
            throw new NotFoundException(`Kecamatan with ID "${id}" not found`);
        }
        return kecamatan;
    }

    async findAllByKabupaten(id_kabupaten: number): Promise<Kecamatan[]> {
        const kecamatan = await this.kecamatanRepository.find({
            where: { id_kabupaten }
        });
        if (!kecamatan || kecamatan.length === 0) {
            throw new NotFoundException(`Kecamatan with Kabupaten ID "${id_kabupaten}" not found`);
        }
        return kecamatan;
    }

    async findAllBySearch(search: string): Promise<Kecamatan[]> {
        const queryBuilder = this.kecamatanRepository.createQueryBuilder('kecamatan');
        if (search) {
            queryBuilder.andWhere('kecamatan.nama LIKE :search', { search: `%${search}%` });
        }
        const kecamatan = await queryBuilder.getMany();
        if (!kecamatan || kecamatan.length === 0) {
            throw new NotFoundException(`Kecamatan not found`);
        }
        return kecamatan;
    }

    async create(createKecamatanDto: CreateKecamatanDto): Promise<Kecamatan> {
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

    async update(id: number, updateKecamatanDto: UpdateKecamatanDto): Promise<Kecamatan> {
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

    async remove(id: number): Promise<void> {
        try {
            await this.kecamatanRepository.delete(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw new Error('Cannot delete Kecamatan as it is referenced by one or more districts');
            }
            throw error;
        }
    }
}
