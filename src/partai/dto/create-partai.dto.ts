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
        example: 'https://example.com/logo.jpg', 
        required: false 
    })
    @IsString()
    @IsOptional()
    logo?: string;

    @ApiProperty({ 
        example: 'image/jpeg', 
        required: false 
    })
    @IsString()
    @IsOptional()
    @MaxLength(191)
    logo_mime?: string;

    @ApiProperty({ 
        example: 2048, 
        required: false 
    })
    @IsNumber()
    @IsOptional()
    logo_size?: number;

    @ApiProperty({ 
        example: 'Description of the party', 
        required: false 
    })
    @IsString()
    @IsOptional()
    deskripsi?: string;
}