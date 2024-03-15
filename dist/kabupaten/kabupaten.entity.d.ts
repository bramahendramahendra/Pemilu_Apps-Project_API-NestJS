import { Provinsi } from 'src/provinsi/provinsi.entity';
export declare class Kabupaten {
    id: number;
    id_provinsi: number;
    nama: string;
    created_at: Date;
    updated_at: Date;
    provinsi: Provinsi;
}
