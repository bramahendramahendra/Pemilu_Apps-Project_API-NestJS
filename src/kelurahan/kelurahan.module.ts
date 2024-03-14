import { Module } from '@nestjs/common';
import { KelurahanController } from './kelurahan.controller';
import { KelurahanService } from './kelurahan.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kelurahan } from './kelurahan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kelurahan])],
  controllers: [KelurahanController],
  providers: [KelurahanService]
})
export class KelurahanModule {}
