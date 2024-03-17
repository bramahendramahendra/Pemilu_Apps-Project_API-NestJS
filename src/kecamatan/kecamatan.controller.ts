import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { KecamatanService } from './kecamatan.service';
import { CreateKecamatanDto } from './dto/create-kecamatan.dto';
import { UpdateKecamatanDto } from './dto/update-kecamatan.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('kecamatan')
@Controller('kecamatan')
export class KecamatanController {
    constructor(private readonly kecamatanService: KecamatanService) { }

    @Get()
    async findAll() {
        return this.kecamatanService.findAll().catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get('search')
    async search(@Query('search') search: string) {
        return this.kecamatanService.findAllBySearch(search).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get('by-kabupaten/:id_kabupaten')
    async findAllByKabupaten(@Param('id_kabupaten') id_kabupaten: number) {
        return this.kecamatanService.findAllByKabupaten(id_kabupaten).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.kecamatanService.findOne(id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() createKecamatanDto: CreateKecamatanDto) {
        return this.kecamatanService.create(createKecamatanDto);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async update(@Param('id') id: number, @Body() updateKecamatanDto: UpdateKecamatanDto) {
        return this.kecamatanService.update(id, updateKecamatanDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.kecamatanService.remove(id);
    }
}
