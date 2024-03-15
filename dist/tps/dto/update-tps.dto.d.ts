import { CreateTpsDto } from './create-tps.dto';
declare const UpdateTpsDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTpsDto>>;
export declare class UpdateTpsDto extends UpdateTpsDto_base {
    nama?: string;
    alamat?: string;
}
export {};
