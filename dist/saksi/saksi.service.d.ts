import { Saksi } from './saksi.entity';
import { Repository } from 'typeorm';
import { CreateSaksiDto } from './dto/create-saksi.dto';
import { UpdateSaksiDto } from './dto/update-saksi.dto';
export declare class SaksiService {
    private saksiRepository;
    constructor(saksiRepository: Repository<Saksi>);
    findAll(): Promise<Saksi[]>;
    findOne(id: number): Promise<Saksi>;
    findAllByTps(id_tps: number): Promise<Saksi[]>;
    findAllByKandidat(id_kandidat: number): Promise<Saksi[]>;
    findAllBySearch(search: string): Promise<Saksi[]>;
    create(createSaksiDto: CreateSaksiDto): Promise<Saksi>;
    update(id: number, updateSaksiDto: UpdateSaksiDto): Promise<Saksi>;
    remove(id: number): Promise<void>;
}
