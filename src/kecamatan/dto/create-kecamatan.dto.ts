import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsString, Length, MaxLength, Min } from 'class-validator';

export class CreateKecamatanDto {
    @ApiProperty({ 
        example: 'Pasar Minggu',
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
    id_kabupaten: number;
}