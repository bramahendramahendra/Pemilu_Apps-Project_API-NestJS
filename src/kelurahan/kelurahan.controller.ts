import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { KelurahanService } from './kelurahan.service';
import { CreateKelurahanDto } from './dto/create-kelurahan.dto';
import { UpdateKelurahanDto } from './dto/update-kelurahan.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('kecamatan')
@Controller('kelurahan')
export class KelurahanController {
    constructor(private readonly kelurahanService: KelurahanService) { }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() createKelurahanDto: CreateKelurahanDto) {
        return this.kelurahanService.create(createKelurahanDto);
    }

    @Get()
    findAll() {
        return this.kelurahanService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.kelurahanService.findOne(id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    update(@Param('id') id: number, @Body() updateKelurahanDto: UpdateKelurahanDto) {
        return this.kelurahanService.update(id, updateKelurahanDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.kelurahanService.remove(id);
    }
}
