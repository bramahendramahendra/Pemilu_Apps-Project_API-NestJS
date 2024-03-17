import { Kandidat } from 'src/kandidat/kandidat.entity';
import { TPS } from 'src/tps/tps.entity';
export declare class Saksi {
    id: number;
    nama: string;
    kontak: string;
    id_tps: number;
    id_kandidat: number;
    created_at: Date;
    updated_at: Date;
    tps: TPS;
    kandidat: Kandidat;
}
