import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, MaxLength } from 'class-validator';

export class CreateKelurahanDto {
    @ApiProperty({ example: 'Ragunan' })
    @IsString()
    @Length(1, 25)
    @MaxLength(25)
    nama: string;
}