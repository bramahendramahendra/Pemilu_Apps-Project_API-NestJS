import { CreateKelurahanDto } from './create-kelurahan.dto';
declare const UpdateKelurahanDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateKelurahanDto>>;
export declare class UpdateKelurahanDto extends UpdateKelurahanDto_base {
    nama?: string;
    id_kecamatan?: number;
}
export {};
