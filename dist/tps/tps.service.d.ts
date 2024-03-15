import { TPS } from './tps.entity';
import { CreateTpsDto } from './dto/create-tps.dto';
import { UpdateTpsDto } from './dto/update-tps.dto';
import { Repository } from 'typeorm';
export declare class TpsService {
    private tpsRepository;
    constructor(tpsRepository: Repository<TPS>);
    findAll(): Promise<TPS[]>;
    findOne(id: number): Promise<TPS>;
    create(createTpsDto: CreateTpsDto): Promise<TPS>;
    update(id: number, updateTpsDto: UpdateTpsDto): Promise<TPS>;
    remove(id: number): Promise<void>;
}
