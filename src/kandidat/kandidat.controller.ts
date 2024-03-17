import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { KandidatService } from './kandidat.service';
import { CreateKandidatDto } from './dto/create-kandidat.dto';
import { UpdateKandidatDto } from './dto/update-kandidat.dto';

@ApiTags('kandidat')
@Controller('kandidat')
export class KandidatController {
    constructor(private readonly KandidatService: KandidatService) { }

    @Get()
    async findAll() {
        return this.KandidatService.findAll().catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get('search')
    async search(@Query('search') search: string) {
        return this.KandidatService.findAllBySearch(search).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get('by-partai/:id_partai')
    async findAllByPartai(@Param('id_partai') id_partai: number) {
        return this.KandidatService.findAllByPartai(id_partai).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.KandidatService.findOne(id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() createKandidatDto: CreateKandidatDto) {
        return this.KandidatService.create(createKandidatDto);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async update(@Param('id') id: number, @Body() updateKandidatDto: UpdateKandidatDto) {
        return this.KandidatService.update(id, updateKandidatDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.KandidatService.remove(id);
    }
}
