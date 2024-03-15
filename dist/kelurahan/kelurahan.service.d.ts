import { CreateKelurahanDto } from './dto/create-kelurahan.dto';
import { Kelurahan } from './kelurahan.entity';
import { Repository } from 'typeorm';
import { UpdateKelurahanDto } from './dto/update-kelurahan.dto';
export declare class KelurahanService {
    private kelurahanRepository;
    constructor(kelurahanRepository: Repository<Kelurahan>);
    findAll(): Promise<Kelurahan[]>;
    findOne(id: number): Promise<Kelurahan>;
    create(createKelurahanDto: CreateKelurahanDto): Promise<Kelurahan>;
    update(id: number, updateKelurahanDto: UpdateKelurahanDto): Promise<Kelurahan>;
    remove(id: number): Promise<void>;
}
