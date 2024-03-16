import { Partai } from 'src/partai/partai.entity';
export declare class Kandidat {
    id: number;
    nama: string;
    foto: string;
    foto_mime: string;
    foto_size: number;
    biografi: string;
    id_partai: Partai;
    created_at: Date;
    updated_at: Date;
    partai: Partai;
}
