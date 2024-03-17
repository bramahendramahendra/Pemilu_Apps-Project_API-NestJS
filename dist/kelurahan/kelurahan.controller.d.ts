import { KelurahanService } from './kelurahan.service';
import { CreateKelurahanDto } from './dto/create-kelurahan.dto';
import { UpdateKelurahanDto } from './dto/update-kelurahan.dto';
export declare class KelurahanController {
    private readonly kelurahanService;
    constructor(kelurahanService: KelurahanService);
    findAll(): Promise<import("src/kelurahan/kelurahan.entity").Kelurahan[]>;
    search(search: string): Promise<import("src/kelurahan/kelurahan.entity").Kelurahan[]>;
    findAllByKecamatan(id_kecamatan: number): Promise<import("src/kelurahan/kelurahan.entity").Kelurahan[]>;
    findOne(id: number): Promise<import("src/kelurahan/kelurahan.entity").Kelurahan>;
    create(createKelurahanDto: CreateKelurahanDto): Promise<import("src/kelurahan/kelurahan.entity").Kelurahan>;
    update(id: number, updateKelurahanDto: UpdateKelurahanDto): Promise<import("src/kelurahan/kelurahan.entity").Kelurahan>;
    remove(id: number): Promise<void>;
}
