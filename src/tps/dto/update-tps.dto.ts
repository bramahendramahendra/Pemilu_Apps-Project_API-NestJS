import { PartialType } from '@nestjs/mapped-types';
import { CreateTpsDto } from './create-tps.dto';
import { IsInt, IsNumber, IsOptional, IsString, Length, MaxLength, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTpsDto extends PartialType(CreateTpsDto) {
    @ApiProperty({ 
        example: 'TPS 01',
        required: false 
    })
    @IsString()
    @Length(1, 25)
    @MaxLength(25)
    @IsOptional()
    nama?: string;

    @ApiProperty({
        example: 1,
        required: false
    })
    @IsInt()
    @IsNumber()
    @Min(1)
    @IsOptional()
    id_kelurahan: number;

    @ApiProperty({
        example: 'Jl.Harsono RM No.1',
        required: false
    })
    @IsOptional()
    @IsString()
    alamat?: string;
}