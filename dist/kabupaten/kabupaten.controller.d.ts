import { KabupatenService } from './kabupaten.service';
import { CreateKabupatenDto } from './dto/create-kabupaten.dto';
import { UpdateKabupatenDto } from './dto/update-kabupaten.dto';
export declare class KabupatenController {
    private readonly kabupatenService;
    constructor(kabupatenService: KabupatenService);
    create(createKabupatenDto: CreateKabupatenDto): Promise<import("src/kabupaten/kabupaten.entity").Kabupaten>;
    findAll(): Promise<import("src/kabupaten/kabupaten.entity").Kabupaten[]>;
    findOne(id: number): Promise<import("src/kabupaten/kabupaten.entity").Kabupaten>;
    update(id: number, updateKabupatenDto: UpdateKabupatenDto): Promise<import("src/kabupaten/kabupaten.entity").Kabupaten>;
    remove(id: number): Promise<void>;
}
