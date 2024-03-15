import { Repository } from 'typeorm';
import { Kecamatan } from './kecamatan.entity';
import { CreateKecamatanDto } from './dto/create-kecamatan.dto';
import { UpdateKecamatanDto } from './dto/update-kecamatan.dto';
export declare class KecamatanService {
    private kecamatanRepository;
    constructor(kecamatanRepository: Repository<Kecamatan>);
    findAll(): Promise<Kecamatan[]>;
    findOne(id: number): Promise<Kecamatan>;
    create(createKecamatanDto: CreateKecamatanDto): Promise<Kecamatan>;
    update(id: number, updateKecamatanDto: UpdateKecamatanDto): Promise<Kecamatan>;
    remove(id: number): Promise<void>;
}
