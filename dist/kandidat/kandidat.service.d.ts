import { Repository } from 'typeorm';
import { Kandidat } from './kandidat.entity';
import { UpdateKandidatDto } from './dto/update-kandidat.dto';
import { CreateKandidatDto } from './dto/create-kandidat.dto';
export declare class KandidatService {
    private kandidatRepository;
    constructor(kandidatRepository: Repository<Kandidat>);
    findAll(): Promise<Kandidat[]>;
    findOne(id: number): Promise<Kandidat>;
    findAllByPartai(id_partai: number): Promise<Kandidat[]>;
    findAllBySearch(search: string): Promise<Kandidat[]>;
    create(createKandidatDto: CreateKandidatDto): Promise<Kandidat>;
    update(id: number, updateKandidatDto: UpdateKandidatDto): Promise<Kandidat>;
    remove(id: number): Promise<void>;
}
