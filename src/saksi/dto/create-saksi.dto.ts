import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsString, Length, MaxLength, Min } from 'class-validator';

export class CreateSaksiDto {
    @ApiProperty({ 
        example: 'John Doe',
        required: true
    })
    @IsString()
    @Length(1, 25)
    @MaxLength(25)
    nama: string;

    @ApiProperty({ 
        example: '+621234567890', 
        required: true 
    })
    @IsString()
    @Length(1, 25)
    @MaxLength(15)
    kontak: string;

    @ApiProperty({ 
        example: 1,
        required: true
    })
    @IsInt()
    @IsNumber()
    @Min(1)
    id_tps: number;

    @ApiProperty({
        example: 1,
        required: true 
    })
    @IsInt()
    @IsNumber()
    @Min(1)
    id_kandidat: number;
}