import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Length, MaxLength } from 'class-validator';

export class CreatePartaiDto {
    @ApiProperty({ 
        example: 'Partai XYZ', 
        required: true 
    })
    @IsString()
    @Length(1, 25)
    @MaxLength(25)
    nama: string;

    @ApiProperty({ 
        // example: 'https://example.com/logo.jpg', 
        type: 'string',
        required: false,
        format: 'binary',
    })
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