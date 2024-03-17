import { TpsService } from './tps.service';
import { CreateTpsDto } from './dto/create-tps.dto';
import { UpdateTpsDto } from './dto/update-tps.dto';
export declare class TpsController {
    private readonly tpsService;
    constructor(tpsService: TpsService);
    findAll(): Promise<import("src/tps/tps.entity").TPS[]>;
    search(search: string): Promise<import("src/tps/tps.entity").TPS[]>;
    findAllByKelurahan(id_kelurahan: number): Promise<import("src/tps/tps.entity").TPS[]>;
    findOne(id: number): Promise<import("src/tps/tps.entity").TPS>;
    create(createTpsDto: CreateTpsDto): Promise<import("src/tps/tps.entity").TPS>;
    update(id: number, updateTpsDto: UpdateTpsDto): Promise<import("src/tps/tps.entity").TPS>;
    remove(id: number): Promise<void>;
}
