import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvinsiModule } from './provinsi/provinsi.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KabupatenModule } from './kabupaten/kabupaten.module';
import { KecamatanModule } from './kecamatan/kecamatan.module';
import { KelurahanModule } from './kelurahan/kelurahan.module';
import { TpsModule } from './tps/tps.module';
import { KandidatModule } from './kandidat/kandidat.module';
import { PartaiModule } from './partai/partai.module';
import { SaksiModule } from './saksi/saksi.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    // console.log(process.env.DB_USERNAME),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
    }), 
    ProvinsiModule, KabupatenModule, KecamatanModule, KelurahanModule, TpsModule, KandidatModule, PartaiModule, SaksiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor() {
  //   // Added console log for debugging purposes
  //   console.log('DB_USERNAME:', process.env.DB_USERNAME);
  // }
}
