import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PartaiService } from './partai.service';
import { CreatePartaiDto } from './dto/create-partai.dto';
import { UpdatePartaiDto } from './dto/update-partai.dto';

@ApiTags('partai')
@Controller('partai')
export class PartaiController {
    constructor(private readonly PartaiService: PartaiService) { }

    @Get()
    async findAll() {
        return this.PartaiService.findAll().catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get('search')
    async search(@Query('search') search: string) {
        return this.PartaiService.findAllBySearch(search).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.PartaiService.findOne(id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() createPartaiDto: CreatePartaiDto) {
        return this.PartaiService.create(createPartaiDto);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async update(@Param('id') id: number, @Body() updatePartaiDto: UpdatePartaiDto) {
        return this.PartaiService.update(id, updatePartaiDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.PartaiService.remove(id);
    }
}
