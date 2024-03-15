import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { KecamatanService } from './kecamatan.service';
import { CreateKecamatanDto } from './dto/create-kecamatan.dto';
import { UpdateKecamatanDto } from './dto/update-kecamatan.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('kecamatan')
@Controller('kecamatan')
export class KecamatanController {
    constructor(private readonly kecamatanService: KecamatanService) { }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() createKecamatanDto: CreateKecamatanDto) {
        return this.kecamatanService.create(createKecamatanDto);
    }

    @Get()
    findAll() {
        return this.kecamatanService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.kecamatanService.findOne(id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    update(@Param('id') id: number, @Body() updateKecamatanDto: UpdateKecamatanDto) {
        return this.kecamatanService.update(id, updateKecamatanDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.kecamatanService.remove(id);
    }
}
