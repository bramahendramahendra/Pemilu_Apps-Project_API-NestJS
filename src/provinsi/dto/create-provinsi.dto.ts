import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, MaxLength } from 'class-validator';

export class CreateProvinsiDto {
    @ApiProperty({ example: 'DKI Jakarta' })
    @IsString()
    @Length(1, 25)
    @MaxLength(25)
    nama: string;
}