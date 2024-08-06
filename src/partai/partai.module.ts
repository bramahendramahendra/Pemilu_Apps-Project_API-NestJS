import { Module } from '@nestjs/common';
import { PartaiController } from './partai.controller';
import { PartaiService } from './partai.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partai } from './partai.entity';
import { MulterModule } from '@nestjs/platform-express';
import { multerConfig } from 'src/config/multer.config';

@Module({
  imports: [
    MulterModule.register(multerConfig),
    TypeOrmModule.forFeature([Partai])
  ],
  controllers: [PartaiController],
  providers: [PartaiService]
})
export class PartaiModule {}
