import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SaksiService } from './saksi.service';
import { CreateSaksiDto } from './dto/create-saksi.dto';
import { UpdateSaksiDto } from './dto/update-saksi.dto';

@ApiTags('saksi')
@Controller('saksi')
export class SaksiController {
    constructor(private readonly SaksiService: SaksiService) { }

    @Get()
    async findAll() {
        return this.SaksiService.findAll().catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get('search')
    async search(@Query('search') search: string) {
        return this.SaksiService.findAllBySearch(search).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get('by-tps/:id_tps')
    async findAllByTps(@Param('id_tps') id_tps: number) {
        return this.SaksiService.findAllByTps(id_tps).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get('by-partai/:id_kandidat')
    async findAllByKandidat(@Param('id_kandidat') id_kandidat: number) {
        return this.SaksiService.findAllByKandidat(id_kandidat).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.SaksiService.findOne(id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() createSaksiDto: CreateSaksiDto) {
        return this.SaksiService.create(createSaksiDto);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async update(@Param('id') id: number, @Body() updateSaksiDto: UpdateSaksiDto) {
        return this.SaksiService.update(id, updateSaksiDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.SaksiService.remove(id);
    }
}
