import { CreateKecamatanDto } from './create-kecamatan.dto';
declare const UpdateKecamatanDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateKecamatanDto>>;
export declare class UpdateKecamatanDto extends UpdateKecamatanDto_base {
    nama?: string;
}
export {};
