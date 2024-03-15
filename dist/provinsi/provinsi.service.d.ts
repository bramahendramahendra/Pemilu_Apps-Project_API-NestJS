import { Provinsi } from './provinsi.entity';
import { Repository } from 'typeorm';
import { CreateProvinsiDto } from './dto/create-provinsi.dto';
import { UpdateProvinsiDto } from './dto/update-provinsi.dto';
export declare class ProvinsiService {
    private provinsiRepository;
    constructor(provinsiRepository: Repository<Provinsi>);
    findAll(): Promise<Provinsi[]>;
    findOne(id: number): Promise<Provinsi>;
    create(createProvinsiDto: CreateProvinsiDto): Promise<Provinsi>;
    update(id: number, updateProvinsiDto: UpdateProvinsiDto): Promise<Provinsi>;
    remove(id: number): Promise<void>;
}
