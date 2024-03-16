import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, MaxLength } from 'class-validator';

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
        example: 'Jl.Harsono RM No.1',
        required: true 
    })
    @IsString()
    alamat: string;
}