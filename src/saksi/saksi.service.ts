import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Saksi } from './saksi.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateSaksiDto } from './dto/create-saksi.dto';
import { UpdateSaksiDto } from './dto/update-saksi.dto';

@Injectable()
export class SaksiService {
    constructor(
        @InjectRepository(Saksi)
        private saksiRepository: Repository<Saksi>,
    ) { }

    async findAll(): Promise<Saksi[]> {
        const saksi = await this.saksiRepository.find();
        if (!saksi || saksi.length === 0) {
            throw new NotFoundException(`Saksi not found`);
        }
        return saksi;
    }

    async findOne(id: number): Promise<Saksi> {
        const saksi = await this.saksiRepository.findOneBy({ id });
        if (!saksi) {
            throw new NotFoundException(`Saksi with ID "${id}" not found`);
        }
        return saksi;
    }

    async findAllByTps(id_tps: number): Promise<Saksi[]> {
        const tps = await this.saksiRepository.find({
            where: { id_tps }
        });
        if (!tps || tps.length === 0) {
            throw new NotFoundException(`Saksi with TPS ID "${id_tps}" not found`);
        }
        return tps;
    }
    async findAllByKandidat(id_kandidat: number): Promise<Saksi[]> {
        const kandidat = await this.saksiRepository.find({
            where: { id_kandidat }
        });
        if (!kandidat || kandidat.length === 0) {
            throw new NotFoundException(`Saksi with Kandidat ID "${id_kandidat}" not found`);
        }
        return kandidat;
    }

    async findAllBySearch(search: string): Promise<Saksi[]> {
        const queryBuilder = this.saksiRepository.createQueryBuilder('saksi');
        if (search) {
            queryBuilder.andWhere('saksi.nama LIKE :search OR saksi.deskripsi LIKE :search', { search: `%${search}%` });
        }
        const saksi = await queryBuilder.getMany();
        if (!saksi || saksi.length === 0) {
            throw new NotFoundException(`Saksi not found`);
        }
        return saksi;
    }

    async create(createSaksiDto: CreateSaksiDto): Promise<Saksi> {
        const existing = await this.saksiRepository.findOne({
            where: { nama: createSaksiDto.nama },
        });
        if (existing) {
            throw new Error('Saksi name already exists');
        }
        const saksi = this.saksiRepository.create(createSaksiDto);
        await this.saksiRepository.save(saksi);
        return saksi;
    }

    async update(id: number, updateSaksiDto: UpdateSaksiDto): Promise<Saksi> {
        const existing = await this.saksiRepository.findOne({
            where: { nama: updateSaksiDto.nama },
        });
        if (existing && existing.id !== id) {
            throw new Error('Saksi name already exists');
        }
        const saksi = await this.findOne(id);
        Object.assign(saksi, updateSaksiDto);
        await this.saksiRepository.save(saksi);
        return saksi;
    }

    async remove(id: number): Promise<void> {
        try {
            await this.saksiRepository.delete(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw new Error('Cannot delete Saksi as it is referenced by one or more districts');
            }
            throw error;
        }
    }
}
