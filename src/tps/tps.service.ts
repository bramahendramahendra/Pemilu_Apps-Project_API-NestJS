import { Injectable, NotFoundException } from '@nestjs/common';
import { TPS } from './tps.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTpsDto } from './dto/create-tps.dto';
import { UpdateTpsDto } from './dto/update-tps.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TpsService {
    constructor(
        @InjectRepository(TPS)
        private tpsRepository: Repository<TPS>,
    ) { }

    async findAll(): Promise<TPS[]> {
        return this.tpsRepository.find();
    }

    async findOne(id: number): Promise<TPS> {
        const tps = await this.tpsRepository.findOneBy({ id });
        if (!tps) {
            throw new NotFoundException(`Tps with ID "${id}" not found`);
        }
        return tps;
    }

    async create(createTpsDto: CreateTpsDto): Promise<TPS> {
        const tps = this.tpsRepository.create(createTpsDto);
        await this.tpsRepository.save(tps);
        return tps;
    }

    async update(id: number, updateTpsDto: UpdateTpsDto): Promise<TPS> {
        const tps = await this.findOne(id);
        Object.assign(tps, updateTpsDto);
        await this.tpsRepository.save(tps);
        return tps;
    }

    async remove(id: number): Promise<void> {
        const result = await this.tpsRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`TPS with ID "${id}" not found`);
        }
    }
}
