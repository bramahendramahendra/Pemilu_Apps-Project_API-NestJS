import { PartialType } from '@nestjs/mapped-types';
import { CreateKelurahanDto } from './create-kelurahan.dto';
import { IsInt, IsNumber, IsOptional, IsString, Length, MaxLength, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateKelurahanDto extends PartialType(CreateKelurahanDto) {
    @ApiProperty({ 
        example: 'Ragunan',
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
    id_kecamatan?: number;
}