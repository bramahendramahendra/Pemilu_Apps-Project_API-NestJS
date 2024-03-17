import { Module } from '@nestjs/common';
import { KandidatController } from './kandidat.controller';
import { KandidatService } from './kandidat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kandidat } from './kandidat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kandidat])],
  controllers: [KandidatController],
  providers: [KandidatService]
})
export class KandidatModule {}
