import { Module } from '@nestjs/common';
import { KabupatenController } from './kabupaten.controller';
import { KabupatenService } from './kabupaten.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kabupaten } from './kabupaten.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kabupaten])],
  controllers: [KabupatenController],
  providers: [KabupatenService]
})
export class KabupatenModule {}
