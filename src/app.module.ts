import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvinsiModule } from './provinsi/provinsi.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'pilkada_apps',
      entities: [],
      synchronize: true,
    }), 
    ProvinsiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
