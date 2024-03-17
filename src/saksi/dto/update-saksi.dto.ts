import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNumber, IsOptional, IsString, Length, MaxLength, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateSaksiDto } from './create-saksi.dto';

export class UpdateSaksiDto extends PartialType(CreateSaksiDto) {
    @ApiProperty({
        example: 'John Doe',
        required: false
    })
    @IsString()
    @IsOptional()
    @Length(1, 25)
    @MaxLength(25)
    nama?: string;

    @ApiProperty({
        example: '+621234567890',
        required: false
    })
    @IsString()
    @IsOptional()
    @Length(1, 15)
    @MaxLength(15)
    kontak?: string;

    @ApiProperty({
        example: 1,
        required: false
    })
    @IsInt()
    @IsNumber()
    @Min(1)
    @IsOptional()
    id_tps?: number;

    @ApiProperty({
        example: 1,
        required: false
    })
    @IsInt()
    @IsNumber()
    @Min(1)
    @IsOptional()
    id_kandidat?: number;
}