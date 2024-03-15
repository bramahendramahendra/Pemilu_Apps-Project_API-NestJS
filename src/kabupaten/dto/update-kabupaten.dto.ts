import { PartialType } from '@nestjs/mapped-types';
import { CreateKabupatenDto } from './create-kabupaten.dto';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateKabupatenDto extends PartialType(CreateKabupatenDto) {
    @ApiProperty({ example: 'Jakarta Selatan' })
    @IsOptional()
    nama?: string;
}