import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Partai } from './partai.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { CreatePartaiDto } from './dto/create-partai.dto';
import { UpdatePartaiDto } from './dto/update-partai.dto';

@Injectable()
export class PartaiService {
    constructor(
        @InjectRepository(Partai)
        private partaiRepository: Repository<Partai>,
    ) { }

    async findAll(): Promise<Partai[]> {
        return this.partaiRepository.find();
    }

    async findOne(id: number): Promise<Partai> {
        const partai = await this.partaiRepository.findOneBy({ id });
        if (!partai) {
            throw new NotFoundException(`Partai with ID "${id}" not found`);
        }
        return partai;
    }

    async create(createPartaiDto: CreatePartaiDto): Promise<Partai> {
        const existing = await this.partaiRepository.findOne({
            where: { nama: createPartaiDto.nama },
        });
        if (existing) {
            throw new Error('Partai name already exists');
        }
        const partai = this.partaiRepository.create(createPartaiDto);
        await this.partaiRepository.save(partai);
        return partai;
    }

    async update(id: number, updatePartaiDto: UpdatePartaiDto): Promise<Partai> {
        const existing = await this.partaiRepository.findOne({
            where: { nama: updatePartaiDto.nama },
        });
        if (existing && existing.id !== id) {
            throw new Error('Partai name already exists');
        }
        const partai = await this.findOne(id);
        Object.assign(partai, updatePartaiDto);
        await this.partaiRepository.save(partai);
        return partai;
    }

    async remove(id: number): Promise<void> {
        try {
            await this.partaiRepository.delete(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw new Error('Cannot delete Partai as it is referenced by one or more districts');
            }
            throw error;
        }
    }
}
