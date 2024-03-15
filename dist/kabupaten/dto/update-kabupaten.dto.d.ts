import { CreateKabupatenDto } from './create-kabupaten.dto';
declare const UpdateKabupatenDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateKabupatenDto>>;
export declare class UpdateKabupatenDto extends UpdateKabupatenDto_base {
    nama?: string;
}
export {};
