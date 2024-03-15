import { PartialType } from '@nestjs/mapped-types';
import { CreateTpsDto } from './create-tps.dto';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTpsDto extends PartialType(CreateTpsDto) {
    @ApiProperty({ example: 'TPS 01' })
    @IsOptional()
    nama?: string;

    @ApiProperty({ example: 'Jl.Harsono RM No.1' })
    @IsOptional()
    alamat?: string;
}