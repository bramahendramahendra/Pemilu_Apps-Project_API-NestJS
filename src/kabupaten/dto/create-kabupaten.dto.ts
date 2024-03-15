import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, MaxLength } from 'class-validator';

export class CreateKabupatenDto {
    @ApiProperty({ example: 'Jakarta Selatan' })
    @IsString()
    @Length(1, 25)
    @MaxLength(25)
    nama: string;
}