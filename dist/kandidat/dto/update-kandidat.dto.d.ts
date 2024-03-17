import { CreateKandidatDto } from './create-kandidat.dto';
declare const UpdateKandidatDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateKandidatDto>>;
export declare class UpdateKandidatDto extends UpdateKandidatDto_base {
    nama?: string;
    foto?: string;
    foto_mime?: string;
    foto_size?: number;
    biografi?: string;
    id_partai?: number;
}
export {};
