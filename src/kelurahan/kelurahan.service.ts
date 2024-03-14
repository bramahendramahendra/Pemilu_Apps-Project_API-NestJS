import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateKelurahanDto } from './dto/create-kelurahan.dto';
import { Kelurahan } from './kelurahan.entity';
import { Repository } from 'typeorm';
import { UpdateKelurahanDto } from './dto/update-kelurahan.dto';

@Injectable()
export class KelurahanService {
    constructor(
        @InjectRepository(Kelurahan)
        private kelurahanRepository: Repository<Kelurahan>,
    ) { }

    async findAll(): Promise<Kelurahan[]> {
        return this.kelurahanRepository.find();
    }

    async findOne(id: number): Promise<Kelurahan> {
        const kelurahan = await this.kelurahanRepository.findOneBy({ id });
        if (!kelurahan) {
            throw new NotFoundException(`Kelurahan with ID "${id}" not found`);
        }
        return kelurahan;
    }

    async create(createKelurahanDto: CreateKelurahanDto): Promise<Kelurahan> {
        const kelurahan = this.kelurahanRepository.create(createKelurahanDto);
        await this.kelurahanRepository.save(kelurahan);
        return kelurahan;
    }

    async update(id: number, updateKelurahanDto: UpdateKelurahanDto): Promise<Kelurahan> {
        const kelurahan = await this.findOne(id);
        Object.assign(kelurahan, updateKelurahanDto);
        await this.kelurahanRepository.save(kelurahan);
        return kelurahan;
    }

    async remove(id: number): Promise<void> {
        const result = await this.kelurahanRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Kelurahan with ID "${id}" not found`);
        }
    }
}
