import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, IsString, Length, MaxLength, Min } from 'class-validator';

export class CreateKandidatDto {
    @ApiProperty({ 
        example: 'Brama Mahendra',
        required: true
    })
    @IsString()
    @Length(1, 25)
    @MaxLength(25)
    nama: string;

    @ApiProperty({ 
        example: 'https://example.com/photo.jpg', 
        required: false 
    })
    @IsString()
    @IsOptional()
    foto?: string;

    @ApiProperty({ 
        example: 'image/jpeg', 
        required: false 
    })
    @IsString()
    @IsOptional()
    @MaxLength(191)
    foto_mime?: string;

    @ApiProperty({ 
        example: 2048, 
        required: false 
    })
    @IsNumber()
    @IsOptional()
    foto_size?: number;

    @ApiProperty({ 
        example: 'Biography of the candidate', 
        required: false 
    })
    @IsString()
    @IsOptional()
    biografi?: string;

    @ApiProperty({ 
        example: 1,
        required: true
    })
    @IsInt()
    @Min(1)
    id_partai: number;
}