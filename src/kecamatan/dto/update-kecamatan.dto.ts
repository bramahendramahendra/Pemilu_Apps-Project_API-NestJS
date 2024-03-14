import { PartialType } from '@nestjs/mapped-types';
import { CreateKecamatanDto } from './create-kecamatan.dto';
import { IsOptional } from 'class-validator';

export class UpdateKecamatanDto extends PartialType(CreateKecamatanDto) {
    @IsOptional()
    nama?: string;
}