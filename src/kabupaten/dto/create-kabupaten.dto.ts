import { IsString, Length, MaxLength } from 'class-validator';

export class CreateKabupatenDto {
    @IsString()
    @Length(1, 25)
    @MaxLength(25)
    nama: string;
}