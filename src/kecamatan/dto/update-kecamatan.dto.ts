import { PartialType } from '@nestjs/mapped-types';
import { CreateKecamatanDto } from './create-kecamatan.dto';
import { IsInt, IsNumber, IsOptional, IsString, Length, MaxLength, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateKecamatanDto extends PartialType(CreateKecamatanDto) {
    @ApiProperty({ 
        example: 'Pasar Minggu',
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
    id_kabupaten?: number;
}