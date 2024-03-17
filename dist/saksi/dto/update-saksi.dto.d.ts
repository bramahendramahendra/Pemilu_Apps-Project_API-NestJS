import { CreateSaksiDto } from './create-saksi.dto';
declare const UpdateSaksiDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSaksiDto>>;
export declare class UpdateSaksiDto extends UpdateSaksiDto_base {
    nama?: string;
    kontak?: string;
    id_tps?: number;
    id_kandidat?: number;
}
export {};
