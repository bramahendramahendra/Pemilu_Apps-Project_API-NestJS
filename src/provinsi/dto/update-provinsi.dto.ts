import { PartialType } from '@nestjs/mapped-types';
import { CreateProvinsiDto } from './create-provinsi.dto';
import { IsOptional } from 'class-validator';

export class UpdateProvinsiDto extends PartialType(CreateProvinsiDto) {
    @IsOptional()
    nama?: string;
}