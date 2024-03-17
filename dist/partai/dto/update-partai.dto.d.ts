import { CreatePartaiDto } from './create-partai.dto';
declare const UpdatePartaiDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePartaiDto>>;
export declare class UpdatePartaiDto extends UpdatePartaiDto_base {
    nama?: string;
    logo?: string;
    logo_mime?: string;
    logo_size?: number;
    deskripsi?: string;
}
export {};
