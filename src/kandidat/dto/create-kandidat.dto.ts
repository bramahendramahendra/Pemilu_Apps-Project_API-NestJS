import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, MaxLength } from 'class-validator';

export class CreateTpsDto {
    @ApiProperty({ example: 'TPS 01' })
    @IsString()
    @Length(1, 25)
    @MaxLength(25)
    nama: string;

    @ApiProperty({ example: 'Jl.Harsono RM No.1' })
    @IsString()
    alamat: string;
}