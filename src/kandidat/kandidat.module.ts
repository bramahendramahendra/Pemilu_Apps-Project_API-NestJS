import { Module } from '@nestjs/common';
import { KandidatController } from './kandidat.controller';
import { KandidatService } from './kandidat.service';

@Module({
  controllers: [KandidatController],
  providers: [KandidatService]
})
export class KandidatModule {}
