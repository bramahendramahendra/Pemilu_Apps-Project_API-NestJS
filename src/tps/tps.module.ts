import { Module } from '@nestjs/common';
import { TpsController } from './tps.controller';
import { TpsService } from './tps.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TPS } from './tps.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TPS])],
  controllers: [TpsController],
  providers: [TpsService]
})
export class TpsModule {}
