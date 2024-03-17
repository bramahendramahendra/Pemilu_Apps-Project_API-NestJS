import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateKelurahanDto } from './dto/create-kelurahan.dto';
import { Kelurahan } from './kelurahan.entity';
import { ILike, QueryFailedError, Repository } from 'typeorm';
import { UpdateKelurahanDto } from './dto/update-kelurahan.dto';

@Injectable()
export class KelurahanService {
    constructor(
        @InjectRepository(Kelurahan)
        private kelurahanRepository: Repository<Kelurahan>,
    ) { }

    async findAll(): Promise<Kelurahan[]> {
        const kelurahan = await this.kelurahanRepository.find();
        if (!kelurahan || kelurahan.length === 0) {
            throw new NotFoundException(`Kelurahan not found`);
        }
        return kelurahan;
    }

    async findOne(id: number): Promise<Kelurahan> {
        const kelurahan = await this.kelurahanRepository.findOneBy({ id });
        if (!kelurahan) {
            throw new NotFoundException(`Kelurahan with ID "${id}" not found`);
        }
        return kelurahan;
    }

    async findAllByKecamatan(id_kecamatan: number): Promise<Kelurahan[]> {
        const kelurahan = await this.kelurahanRepository.find({
            where: { id_kecamatan }
        });
        if (!kelurahan || kelurahan.length === 0) {
            throw new NotFoundException(`Kelurahan with Kecamatan ID "${id_kecamatan}" not found`);
        }
        return kelurahan;
    }

    async findAllBySearch(search: string): Promise<Kelurahan[]> {
        const queryBuilder = this.kelurahanRepository.createQueryBuilder('kelurahan');
        if (search) {
            queryBuilder.andWhere('kelurahan.nama LIKE :search', { search: `%${search}%` });
        }
        const kelurahan = await queryBuilder.getMany();
        if (!kelurahan || kelurahan.length === 0) {
            throw new NotFoundException(`Kelurahan not found`);
        }
        return kelurahan;
    }

    async create(createKelurahanDto: CreateKelurahanDto): Promise<Kelurahan> {
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

    async update(id: number, updateKelurahanDto: UpdateKelurahanDto): Promise<Kelurahan> {
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

    async remove(id: number): Promise<void> {
        try {
            await this.kelurahanRepository.delete(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw new Error('Cannot delete Kelurahan as it is referenced by one or more districts');
            }
            throw error;
        }
    }
}
