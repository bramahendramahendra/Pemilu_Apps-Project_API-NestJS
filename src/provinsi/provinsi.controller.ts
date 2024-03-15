import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProvinsiService } from './provinsi.service';
import { CreateProvinsiDto } from './dto/create-provinsi.dto';
import { UpdateProvinsiDto } from './dto/update-provinsi.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('provinsi')
@Controller('provinsi')
export class ProvinsiController {
    constructor(private readonly provinsiService: ProvinsiService) { }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() createProvinsiDto: CreateProvinsiDto) {
        return this.provinsiService.create(createProvinsiDto);
    }

    @Get()
    findAll() {
        return this.provinsiService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.provinsiService.findOne(id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    update(@Param('id') id: number, @Body() updateProvinsiDto: UpdateProvinsiDto) {
        return this.provinsiService.update(id, updateProvinsiDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.provinsiService.remove(id);
    }
}
