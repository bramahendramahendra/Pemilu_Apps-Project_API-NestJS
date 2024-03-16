import { PartialType } from '@nestjs/mapped-types';
import { CreateKandidatDto } from './create-kandidat.dto';
import { IsInt, IsNumber, IsOptional, IsString, Length, MaxLength, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTpsDto extends PartialType(CreateKandidatDto) {
    @ApiProperty({ 
        example: 'TPS 01',
        required: false
    })
    @IsString()
    @IsOptional()
    @Length(1, 25)
    @MaxLength(25)
    nama?: string;

    @ApiProperty({ example: 'https://example.com/photo.jpg', required: false })
    @IsString()
    @IsOptional()
    foto?: string;

    @ApiProperty({ example: 'image/jpeg', required: false })
    @IsString()
    @IsOptional()
    @MaxLength(191)
    foto_mime?: string;

    @ApiProperty({ example: 2048, required: false })
    @IsNumber()
    @IsOptional()
    foto_size?: number;

    @ApiProperty({ example: 'Updated biography of the candidate', required: false })
    @IsString()
    @IsOptional()
    biografi?: string;

    @ApiProperty({ example: 1, required: false })
    @IsInt()
    @Min(1)
    @IsOptional()
    id_partai?: number;
}