import { Module } from '@nestjs/common';
import { SaksiController } from './saksi.controller';
import { SaksiService } from './saksi.service';

@Module({
  controllers: [SaksiController],
  providers: [SaksiService]
})
export class SaksiModule {}
