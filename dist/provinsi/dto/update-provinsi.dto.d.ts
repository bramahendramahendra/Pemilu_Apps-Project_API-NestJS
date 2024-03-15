import { CreateProvinsiDto } from './create-provinsi.dto';
declare const UpdateProvinsiDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProvinsiDto>>;
export declare class UpdateProvinsiDto extends UpdateProvinsiDto_base {
    nama?: string;
}
export {};
