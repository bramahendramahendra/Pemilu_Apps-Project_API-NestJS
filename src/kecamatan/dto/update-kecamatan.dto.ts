import { PartialType } from '@nestjs/mapped-types';
import { CreateKecamatanDto } from './create-kecamatan.dto';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateKecamatanDto extends PartialType(CreateKecamatanDto) {
    @ApiProperty({ example: 'Pasar Minggu' })
    @IsOptional()
    nama?: string;
}