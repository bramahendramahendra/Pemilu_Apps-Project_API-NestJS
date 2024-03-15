import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { KabupatenService } from './kabupaten.service';
import { CreateKabupatenDto } from './dto/create-kabupaten.dto';
import { UpdateKabupatenDto } from './dto/update-kabupaten.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('kabupaten')
@Controller('kabupaten')
export class KabupatenController {
    constructor(private readonly kabupatenService: KabupatenService) {}

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() createKabupatenDto: CreateKabupatenDto) {
        return this.kabupatenService.create(createKabupatenDto);
    }

    @Get()
    findAll() {
        return this.kabupatenService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.kabupatenService.findOne(id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    update(@Param('id') id: number, @Body() updateKabupatenDto: UpdateKabupatenDto) {
        return this.kabupatenService.update(id, updateKabupatenDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.kabupatenService.remove(id);
    }
}
