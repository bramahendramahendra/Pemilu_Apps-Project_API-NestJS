import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Provinsi } from './provinsi.entity';
import { Repository } from 'typeorm';
import { CreateProvinsiDto } from './dto/create-provinsi.dto';
import { UpdateProvinsiDto } from './dto/update-provinsi.dto';

@Injectable()
export class ProvinsiService {
    constructor(
        @InjectRepository(Provinsi)
        private provinsiRepository: Repository<Provinsi>,
    ) { }

    async findAll(): Promise<Provinsi[]> {
        return this.provinsiRepository.find();
    }

    async findOne(id: number): Promise<Provinsi> {
        const provinsi = await this.provinsiRepository.findOneBy({ id });
        if (!provinsi) {
            throw new NotFoundException(`Provinsi with ID "${id}" not found`);
        }
        return provinsi;
    }

    async create(createProvinsiDto: CreateProvinsiDto): Promise<Provinsi> {
        const provinsi = this.provinsiRepository.create(createProvinsiDto);
        await this.provinsiRepository.save(provinsi);
        return provinsi;
    }

    async update(id: number, updateProvinsiDto: UpdateProvinsiDto): Promise<Provinsi> {
        const provinsi = await this.findOne(id);
        Object.assign(provinsi, updateProvinsiDto);
        await this.provinsiRepository.save(provinsi);
        return provinsi;
    }

    async remove(id: number): Promise<void> {
        const result = await this.provinsiRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Provinsi with ID "${id}" not found`);
        }
    }
}
