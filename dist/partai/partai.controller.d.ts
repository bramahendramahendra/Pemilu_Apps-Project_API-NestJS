/// <reference types="multer" />
import { PartaiService } from './partai.service';
import { CreatePartaiDto } from './dto/create-partai.dto';
import { UpdatePartaiDto } from './dto/update-partai.dto';
export declare class PartaiController {
    private readonly partaiService;
    constructor(partaiService: PartaiService);
    findAll(): Promise<import("src/partai/partai.entity").Partai[]>;
    search(search: string): Promise<import("src/partai/partai.entity").Partai[]>;
    findOne(id: number): Promise<import("src/partai/partai.entity").Partai>;
    create(file: Express.Multer.File, createPartaiDto: CreatePartaiDto): Promise<import("src/partai/partai.entity").Partai>;
    update(id: number, file: Express.Multer.File, updatePartaiDto: UpdatePartaiDto): Promise<import("src/partai/partai.entity").Partai>;
    remove(id: number): Promise<void>;
}
