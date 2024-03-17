import { PartialType } from '@nestjs/mapped-types';
import { CreateKabupatenDto } from './create-kabupaten.dto';
import { IsInt, IsNumber, IsOptional, IsString, Length, MaxLength, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateKabupatenDto extends PartialType(CreateKabupatenDto) {
    @ApiProperty({ 
        example: 'Jakarta Selatan',
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
    id_provinsi?: number;
}