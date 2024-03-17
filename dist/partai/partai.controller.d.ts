import { PartaiService } from './partai.service';
import { CreatePartaiDto } from './dto/create-partai.dto';
import { UpdatePartaiDto } from './dto/update-partai.dto';
export declare class PartaiController {
    private readonly PartaiService;
    constructor(PartaiService: PartaiService);
    findAll(): Promise<import("src/partai/partai.entity").Partai[]>;
    search(search: string): Promise<import("src/partai/partai.entity").Partai[]>;
    findOne(id: number): Promise<import("src/partai/partai.entity").Partai>;
    create(createPartaiDto: CreatePartaiDto): Promise<import("src/partai/partai.entity").Partai>;
    update(id: number, updatePartaiDto: UpdatePartaiDto): Promise<import("src/partai/partai.entity").Partai>;
    remove(id: number): Promise<void>;
}
