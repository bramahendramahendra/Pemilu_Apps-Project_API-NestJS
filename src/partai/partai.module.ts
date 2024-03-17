import { Module } from '@nestjs/common';
import { PartaiController } from './partai.controller';
import { PartaiService } from './partai.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partai } from './partai.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Partai])],
  controllers: [PartaiController],
  providers: [PartaiService]
})
export class PartaiModule {}
