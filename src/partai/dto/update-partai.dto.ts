import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsString, Length, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreatePartaiDto } from './create-partai.dto';

export class UpdatePartaiDto extends PartialType(CreatePartaiDto) {
    @ApiProperty({
        example: 'Partai XYZ',
        required: true
    })
    @IsString()
    @Length(1, 25)
    @MaxLength(25)
    @IsOptional()
    nama?: string;

    @ApiProperty({
        example: 'https://example.com/logo.jpg',
        required: false,
        format: 'binary',
    })
    @IsString()
    @IsOptional()
    logo?: any;

    @ApiProperty({
        example: 'Description of the party',
        required: false
    })
    @IsString()
    @IsOptional()
    deskripsi?: string;
}