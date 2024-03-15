import { PartialType } from '@nestjs/mapped-types';
import { CreateKelurahanDto } from './create-kelurahan.dto';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateKelurahanDto extends PartialType(CreateKelurahanDto) {
    @ApiProperty({ example: 'Ragunan' })
    @IsOptional()
    nama?: string;
}