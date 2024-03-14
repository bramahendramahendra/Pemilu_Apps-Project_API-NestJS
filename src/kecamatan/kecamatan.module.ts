import { Module } from '@nestjs/common';
import { KecamatanController } from './kecamatan.controller';
import { KecamatanService } from './kecamatan.service';
import { Kecamatan } from './kecamatan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kecamatan])],
  controllers: [KecamatanController],
  providers: [KecamatanService]
})
export class KecamatanModule {}
