import { Module } from '@nestjs/common';
import { ProvinsiController } from './provinsi.controller';
import { ProvinsiService } from './provinsi.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provinsi } from './provinsi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Provinsi])],
  controllers: [ProvinsiController],
  providers: [ProvinsiService]
})
export class ProvinsiModule {}
