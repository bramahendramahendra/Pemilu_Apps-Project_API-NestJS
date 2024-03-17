import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Provinsi } from './provinsi.entity';
import { ILike, QueryFailedError, Repository } from 'typeorm';
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

    async findAllBySearch(search?: string): Promise<Provinsi[]> {
        const queryBuilder = this.provinsiRepository.createQueryBuilder('provinsi');
        if (search) {
            queryBuilder.andWhere('provinsi.nama LIKE :search', { search: `%${search}%` });
        }
        const provinsi = await queryBuilder.getMany();
        if (!provinsi || provinsi.length === 0) {
            throw new NotFoundException(`Provinsi not found`);
        }
        return provinsi;
    }

    async create(createProvinsiDto: CreateProvinsiDto): Promise<Provinsi> {
        const existing = await this.provinsiRepository.findOne({
            where: { nama: createProvinsiDto.nama },
        });
        if (existing) {
            throw new Error('Provinsi name already exists');
        }
        const provinsi = this.provinsiRepository.create(createProvinsiDto);
        await this.provinsiRepository.save(provinsi);
        return provinsi;
    }

    async update(id: number, updateProvinsiDto: UpdateProvinsiDto): Promise<Provinsi> {
        const existing = await this.provinsiRepository.findOne({
            where: { nama: updateProvinsiDto.nama },
        });
        if (existing && existing.id !== id) {
            throw new Error('Provinsi name already exists');
        }
        const provinsi = await this.findOne(id);
        Object.assign(provinsi, updateProvinsiDto);
        await this.provinsiRepository.save(provinsi);
        return provinsi;
    }

    async remove(id: number): Promise<void> {
        try {
            await this.provinsiRepository.delete(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw new Error('Cannot delete Provinsi as it is referenced by one or more districts');
            }
            throw error;
        }
    }

}
