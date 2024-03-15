import { KecamatanService } from './kecamatan.service';
import { CreateKecamatanDto } from './dto/create-kecamatan.dto';
import { UpdateKecamatanDto } from './dto/update-kecamatan.dto';
export declare class KecamatanController {
    private readonly kecamatanService;
    constructor(kecamatanService: KecamatanService);
    create(createKecamatanDto: CreateKecamatanDto): Promise<import("src/kecamatan/kecamatan.entity").Kecamatan>;
    findAll(): Promise<import("src/kecamatan/kecamatan.entity").Kecamatan[]>;
    findOne(id: number): Promise<import("src/kecamatan/kecamatan.entity").Kecamatan>;
    update(id: number, updateKecamatanDto: UpdateKecamatanDto): Promise<import("src/kecamatan/kecamatan.entity").Kecamatan>;
    remove(id: number): Promise<void>;
}
