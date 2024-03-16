import { Module } from '@nestjs/common';
import { PartaiController } from './partai.controller';
import { PartaiService } from './partai.service';

@Module({
  controllers: [PartaiController],
  providers: [PartaiService]
})
export class PartaiModule {}
