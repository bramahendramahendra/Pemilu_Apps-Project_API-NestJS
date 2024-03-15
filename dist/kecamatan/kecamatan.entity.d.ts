import { Kabupaten } from "src/kabupaten/kabupaten.entity";
export declare class Kecamatan {
    id: number;
    id_kabupaten: number;
    nama: string;
    created_at: Date;
    updated_at: Date;
    kabupaten: Kabupaten;
}
