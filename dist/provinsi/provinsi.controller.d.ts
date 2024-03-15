import { ProvinsiService } from './provinsi.service';
import { CreateProvinsiDto } from './dto/create-provinsi.dto';
import { UpdateProvinsiDto } from './dto/update-provinsi.dto';
export declare class ProvinsiController {
    private readonly provinsiService;
    constructor(provinsiService: ProvinsiService);
    create(createProvinsiDto: CreateProvinsiDto): Promise<import("src/provinsi/provinsi.entity").Provinsi>;
    findAll(): Promise<import("src/provinsi/provinsi.entity").Provinsi[]>;
    findOne(id: number): Promise<import("src/provinsi/provinsi.entity").Provinsi>;
    update(id: number, updateProvinsiDto: UpdateProvinsiDto): Promise<import("src/provinsi/provinsi.entity").Provinsi>;
    remove(id: number): Promise<void>;
}
