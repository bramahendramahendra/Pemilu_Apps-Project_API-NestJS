import { KandidatService } from './kandidat.service';
import { CreateKandidatDto } from './dto/create-kandidat.dto';
import { UpdateKandidatDto } from './dto/update-kandidat.dto';
export declare class KandidatController {
    private readonly KandidatService;
    constructor(KandidatService: KandidatService);
    findAll(): Promise<import("src/kandidat/kandidat.entity").Kandidat[]>;
    search(search: string): Promise<import("src/kandidat/kandidat.entity").Kandidat[]>;
    findAllByPartai(id_partai: number): Promise<import("src/kandidat/kandidat.entity").Kandidat[]>;
    findOne(id: number): Promise<import("src/kandidat/kandidat.entity").Kandidat>;
    create(createKandidatDto: CreateKandidatDto): Promise<import("src/kandidat/kandidat.entity").Kandidat>;
    update(id: number, updateKandidatDto: UpdateKandidatDto): Promise<import("src/kandidat/kandidat.entity").Kandidat>;
    remove(id: number): Promise<void>;
}
