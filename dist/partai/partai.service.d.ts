import { Partai } from './partai.entity';
import { Repository } from 'typeorm';
import { CreatePartaiDto } from './dto/create-partai.dto';
import { UpdatePartaiDto } from './dto/update-partai.dto';
export declare class PartaiService {
    private partaiRepository;
    constructor(partaiRepository: Repository<Partai>);
    findAll(): Promise<Partai[]>;
    findOne(id: number): Promise<Partai>;
    create(createPartaiDto: CreatePartaiDto): Promise<Partai>;
    update(id: number, updatePartaiDto: UpdatePartaiDto): Promise<Partai>;
    remove(id: number): Promise<void>;
}
