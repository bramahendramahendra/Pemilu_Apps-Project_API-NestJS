import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { KelurahanService } from './kelurahan.service';
import { CreateKelurahanDto } from './dto/create-kelurahan.dto';
import { UpdateKelurahanDto } from './dto/update-kelurahan.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('kelurahan')
@Controller('kelurahan')
export class KelurahanController {
    constructor(private readonly kelurahanService: KelurahanService) { }

    @Get()
    async findAll() {
        return this.kelurahanService.findAll().catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get('search')
    async search(@Query('search') search: string) {
        return this.kelurahanService.findAllBySearch(search).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get('by-kecamatan/:id_kecamatan')
    async findAllByKecamatan(@Param('id_kecamatan') id_kecamatan: number) {
        return this.kelurahanService.findAllByKecamatan(id_kecamatan).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.kelurahanService.findOne(id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() createKelurahanDto: CreateKelurahanDto) {
        return this.kelurahanService.create(createKelurahanDto);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async update(@Param('id') id: number, @Body() updateKelurahanDto: UpdateKelurahanDto) {
        return this.kelurahanService.update(id, updateKelurahanDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.kelurahanService.remove(id);
    }
}
