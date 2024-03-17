import { Module } from '@nestjs/common';
import { SaksiController } from './saksi.controller';
import { SaksiService } from './saksi.service';
import { Saksi } from './saksi.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Saksi])],
  controllers: [SaksiController],
  providers: [SaksiService]
})
export class SaksiModule {}
