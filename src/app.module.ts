import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvinsiModule } from './provinsi/provinsi.module';

@Module({
  imports: [ProvinsiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
