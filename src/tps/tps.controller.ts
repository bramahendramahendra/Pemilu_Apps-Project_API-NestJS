import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TpsService } from './tps.service';
import { CreateTpsDto } from './dto/create-tps.dto';
import { UpdateTpsDto } from './dto/update-tps.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tps')
@Controller('tps')
export class TpsController {
    constructor(private readonly tpsService: TpsService) { }

    @Get()
    async findAll() {
        return this.tpsService.findAll().catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get('search')
    async search(@Query('search') search: string) {
        return this.tpsService.findAllBySearch(search).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get('by-kelurahan/:id_kelurahan')
    async findAllByKelurahan(@Param('id_kelurahan') id_kelurahan: number) {
        return this.tpsService.findAllByKelurahan(id_kelurahan).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.tpsService.findOne(id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() createTpsDto: CreateTpsDto) {
        return this.tpsService.create(createTpsDto);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async update(@Param('id') id: number, @Body() updateTpsDto: UpdateTpsDto) {
        return this.tpsService.update(id, updateTpsDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.tpsService.remove(id);
    }
}
