import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProvinsiService } from './provinsi.service';
import { CreateProvinsiDto } from './dto/create-provinsi.dto';
import { UpdateProvinsiDto } from './dto/update-provinsi.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('provinsi')
@Controller('provinsi')
export class ProvinsiController {
    constructor(private readonly provinsiService: ProvinsiService) { }

    @Get()
    async findAll() {
        return this.provinsiService.findAll().catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get('search')
    async search(@Query('search') search: string ) {
        return this.provinsiService.findAllBySearch(search).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.provinsiService.findOne(id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() createProvinsiDto: CreateProvinsiDto) {
        return this.provinsiService.create(createProvinsiDto);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async update(@Param('id') id: number, @Body() updateProvinsiDto: UpdateProvinsiDto) {
        return this.provinsiService.update(id, updateProvinsiDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.provinsiService.remove(id);
    }
}
