import { PartialType } from '@nestjs/mapped-types';
import { CreateKabupatenDto } from './create-kabupaten.dto';
import { IsOptional } from 'class-validator';

export class UpdateKabupatenDto extends PartialType(CreateKabupatenDto) {
    @IsOptional()
    nama?: string;
}