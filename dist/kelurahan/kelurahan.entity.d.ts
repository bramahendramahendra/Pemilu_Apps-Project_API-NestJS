import { Kecamatan } from 'src/kecamatan/kecamatan.entity';
export declare class Kelurahan {
    id: number;
    id_kecamatan: number;
    nama: string;
    created_at: Date;
    updated_at: Date;
    kecamatan: Kecamatan;
}
