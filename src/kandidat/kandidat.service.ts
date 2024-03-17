import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { Kandidat } from './kandidat.entity';
import { UpdateKandidatDto } from './dto/update-kandidat.dto';
import { CreateKandidatDto } from './dto/create-kandidat.dto';

@Injectable()
export class KandidatService {
    constructor(
        @InjectRepository(Kandidat)
        private kandidatRepository: Repository<Kandidat>,
    ) { }

    async findAll(): Promise<Kandidat[]> {
        const kandidat = await this.kandidatRepository.find();
        if (!kandidat || kandidat.length === 0) {
            throw new NotFoundException(`Kandidat not found`);
        }
        return kandidat;
    }

    async findOne(id: number): Promise<Kandidat> {
        const kandidat = await this.kandidatRepository.findOneBy({ id });
        if (!kandidat) {
            throw new NotFoundException(`Kandidat with ID "${id}" not found`);
        }
        return kandidat;
    }

    async findAllByPartai(id_partai: number): Promise<Kandidat[]> {
        const kandidat = await this.kandidatRepository.find({
            where: { id_partai }
        });
        if (!kandidat || kandidat.length === 0) {
            throw new NotFoundException(`Kandidat with Partai ID "${id_partai}" not found`);
        }
        return kandidat;
    }

    async findAllBySearch(search: string): Promise<Kandidat[]> {
        const queryBuilder = this.kandidatRepository.createQueryBuilder('kandidat');
        if (search) {
            queryBuilder.andWhere('kandidat.nama LIKE :search OR kandidat.deskripsi LIKE :search', { search: `%${search}%` });
        }
        const kandidat = await queryBuilder.getMany();
        if (!kandidat || kandidat.length === 0) {
            throw new NotFoundException(`Kandidat not found`);
        }
        return kandidat;
    }

    async create(createKandidatDto: CreateKandidatDto): Promise<Kandidat> {
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

    async update(id: number, updateKandidatDto: UpdateKandidatDto): Promise<Kandidat> {
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

    async remove(id: number): Promise<void> {
        try {
            await this.kandidatRepository.delete(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw new Error('Cannot delete Kandidat as it is referenced by one or more districts');
            }
            throw error;
        }
    }
}
