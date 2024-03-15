import { PartialType } from '@nestjs/mapped-types';
import { CreateProvinsiDto } from './create-provinsi.dto';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProvinsiDto extends PartialType(CreateProvinsiDto) {
    @ApiProperty({ example: 'DKI Jakarta' })
    @IsOptional()
    nama?: string;
}