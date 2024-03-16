import { Kandidat } from 'src/kandidat/kandidat.entity';
import { TPS } from 'src/tps/tps.entity';
export declare class Saksi {
    id: number;
    nama: string;
    kontak: string;
    id_tps: TPS;
    id_kandidat: Kandidat;
    created_at: Date;
    updated_at: Date;
    tps: TPS;
    kandidat: Kandidat;
}
