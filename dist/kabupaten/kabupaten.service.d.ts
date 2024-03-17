import { Kabupaten } from './kabupaten.entity';
import { Repository } from 'typeorm';
import { CreateKabupatenDto } from './dto/create-kabupaten.dto';
import { UpdateKabupatenDto } from './dto/update-kabupaten.dto';
export declare class KabupatenService {
    private kabupatenRepository;
    constructor(kabupatenRepository: Repository<Kabupaten>);
    findAll(): Promise<Kabupaten[]>;
    findOne(id: number): Promise<Kabupaten>;
    findAllByProvinsi(id_provinsi: number): Promise<Kabupaten[]>;
    findAllBySearch(search?: string): Promise<Kabupaten[]>;
    create(createKabupatenDto: CreateKabupatenDto): Promise<Kabupaten>;
    update(id: number, updateKabupatenDto: UpdateKabupatenDto): Promise<Kabupaten>;
    remove(id: number): Promise<void>;
}
