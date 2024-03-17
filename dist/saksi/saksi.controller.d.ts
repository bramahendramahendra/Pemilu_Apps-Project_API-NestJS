import { SaksiService } from './saksi.service';
import { CreateSaksiDto } from './dto/create-saksi.dto';
import { UpdateSaksiDto } from './dto/update-saksi.dto';
export declare class SaksiController {
    private readonly SaksiService;
    constructor(SaksiService: SaksiService);
    findAll(): Promise<import("src/saksi/saksi.entity").Saksi[]>;
    search(search: string): Promise<import("src/saksi/saksi.entity").Saksi[]>;
    findAllByTps(id_tps: number): Promise<import("src/saksi/saksi.entity").Saksi[]>;
    findAllByKandidat(id_kandidat: number): Promise<import("src/saksi/saksi.entity").Saksi[]>;
    findOne(id: number): Promise<import("src/saksi/saksi.entity").Saksi>;
    create(createSaksiDto: CreateSaksiDto): Promise<import("src/saksi/saksi.entity").Saksi>;
    update(id: number, updateSaksiDto: UpdateSaksiDto): Promise<import("src/saksi/saksi.entity").Saksi>;
    remove(id: number): Promise<void>;
}
