import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsString, Length, MaxLength, Min } from 'class-validator';

export class CreateTpsDto {
    @ApiProperty({ 
        example: 'TPS 01',
        required: true
    })
    @IsString()
    @Length(1, 25)
    @MaxLength(25)
    nama: string;

    @ApiProperty({
        example: 1,
        required: true
    })
    @IsInt()
    @IsNumber()
    @Min(1)
    id_kelurahan: number;

    @ApiProperty({ 
        example: 'Jl.Harsono RM No.1',
        required: true 
    })
    @IsString()
    alamat: string;
}