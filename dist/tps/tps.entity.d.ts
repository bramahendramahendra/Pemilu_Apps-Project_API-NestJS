import { Kelurahan } from 'src/kelurahan/kelurahan.entity';
export declare class TPS {
    id: number;
    id_kelurahan: number;
    nama: string;
    alamat: string;
    created_at: Date;
    updated_at: Date;
    kelurahan: Kelurahan;
}
