import { PartialType } from '@nestjs/mapped-types';
import { CreateTpsDto } from './create-tps.dto';
import { IsOptional } from 'class-validator';

export class UpdateTpsDto extends PartialType(CreateTpsDto) {
    @IsOptional()
    nama?: string;
}