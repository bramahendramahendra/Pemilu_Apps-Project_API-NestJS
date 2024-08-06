/// <reference types="multer" />
import { Partai } from './partai.entity';
import { Repository } from 'typeorm';
import { CreatePartaiDto } from './dto/create-partai.dto';
import { UpdatePartaiDto } from './dto/update-partai.dto';
export declare class PartaiService {
    private partaiRepository;
    constructor(partaiRepository: Repository<Partai>);
    findAll(): Promise<Partai[]>;
    findOne(id: number): Promise<Partai>;
    findAllBySearch(search: string): Promise<Partai[]>;
    create(createPartaiDto: CreatePartaiDto, file: Express.Multer.File): Promise<Partai>;
    update(id: number, updatePartaiDto: UpdatePartaiDto, file: Express.Multer.File): Promise<Partai>;
    remove(id: number): Promise<void>;
    uploadFileToGCS_1(file: Express.Multer.File): Promise<string>;
    uploadFileToGCS(file: Express.Multer.File): Promise<string>;
}
