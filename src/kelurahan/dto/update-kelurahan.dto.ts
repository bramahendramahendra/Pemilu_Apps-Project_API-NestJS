import { PartialType } from '@nestjs/mapped-types';
import { CreateKelurahanDto } from './create-kelurahan.dto';
import { IsOptional } from 'class-validator';

export class UpdateKelurahanDto extends PartialType(CreateKelurahanDto) {
    @IsOptional()
    nama?: string;
}