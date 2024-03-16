import { CreateKandidatDto } from './create-kandidat.dto';
declare const UpdateTpsDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateKandidatDto>>;
export declare class UpdateTpsDto extends UpdateTpsDto_base {
    nama?: string;
    foto?: string;
    foto_mime?: string;
    foto_size?: number;
    biografi?: string;
    id_partai?: number;
}
export {};
