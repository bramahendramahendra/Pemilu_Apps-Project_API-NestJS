import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Kabupaten } from './kabupaten.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateKabupatenDto } from './dto/create-kabupaten.dto';
import { UpdateKabupatenDto } from './dto/update-kabupaten.dto';

@Injectable()
export class KabupatenService {
    constructor(
        @InjectRepository(Kabupaten)
        private kabupatenRepository: Repository<Kabupaten>,
    ) {}

    async findAll(): Promise<Kabupaten[]> {
        return this.kabupatenRepository.find();
    }

    async findOne(id: number): Promise<Kabupaten> {
        const kabupaten = await this.kabupatenRepository.findOneBy({ id });
        if(!kabupaten) {
            throw new NotFoundException(`Kabupaten with ID "${id}" not found`);
        }
        return kabupaten;
    }

    async create(createKabupatenDto: CreateKabupatenDto): Promise<Kabupaten> {
        const existing = await this.kabupatenRepository.findOne({
            where: { nama: createKabupatenDto.nama },
        });
        if (existing) {
            throw new Error('Kabupaten name already exists');
        }
        const kabupaten = this.kabupatenRepository.create(createKabupatenDto);
        await this.kabupatenRepository.save(kabupaten);
        return kabupaten;
    }

    async update(id: number, updateKabupatenDto: UpdateKabupatenDto): Promise<Kabupaten> {
        const existing = await this.kabupatenRepository.findOne({
            where: { nama: updateKabupatenDto.nama },
        });
        if (existing && existing.id !== id) {
            throw new Error('Kabupaten name already exists');
        }
        const kabupaten = await this.findOne(id);
        Object.assign(kabupaten, updateKabupatenDto);
        await this.kabupatenRepository.save(kabupaten);
        return kabupaten;
    }

    async remove(id: number): Promise<void> {
        try {
            await this.kabupatenRepository.delete(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw new Error('Cannot delete Kabupaten as it is referenced by one or more districts');
            }
            throw error;
        }
    }
}
