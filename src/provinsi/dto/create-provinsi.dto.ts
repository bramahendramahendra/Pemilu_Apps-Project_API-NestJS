import { IsString, Length, MaxLength } from 'class-validator';

export class CreateProvinsiDto {
    @IsString()
    @Length(1, 25)
    @MaxLength(25)
    nama: string;
}