import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { KabupatenService } from './kabupaten.service';
import { CreateKabupatenDto } from './dto/create-kabupaten.dto';
import { UpdateKabupatenDto } from './dto/update-kabupaten.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('kabupaten')
@Controller('kabupaten')
export class KabupatenController {
    constructor(private readonly kabupatenService: KabupatenService) {}

    @Get()
    async findAll() {
        return this.kabupatenService.findAll().catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get('search')
    async search(@Query('search') search: string) {
        return this.kabupatenService.findAllBySearch(search).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get('by-provinsi/:id_provinsi')
    async findAllByProvinsi(@Param('id_provinsi') id_provinsi: number) {
        return this.kabupatenService.findAllByProvinsi(id_provinsi).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.kabupatenService.findOne(id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() createKabupatenDto: CreateKabupatenDto) {
        return this.kabupatenService.create(createKabupatenDto);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async update(@Param('id') id: number, @Body() updateKabupatenDto: UpdateKabupatenDto) {
        return this.kabupatenService.update(id, updateKabupatenDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.kabupatenService.remove(id);
    }
}
