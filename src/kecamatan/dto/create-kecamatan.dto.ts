import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, MaxLength } from 'class-validator';

export class CreateKecamatanDto {
    @ApiProperty({ example: 'Pasar Minggu' })
    @IsString()
    @Length(1, 25)
    @MaxLength(25)
    nama: string;
}