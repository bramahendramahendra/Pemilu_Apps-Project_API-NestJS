import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TpsService } from './tps.service';
import { CreateTpsDto } from './dto/create-tps.dto';
import { UpdateTpsDto } from './dto/update-tps.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tps')
@Controller('tps')
export class TpsController {
    constructor(private readonly tpsService: TpsService) { }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() createTpsDto: CreateTpsDto) {
        return this.tpsService.create(createTpsDto);
    }

    @Get()
    findAll() {
        return this.tpsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.tpsService.findOne(id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    update(@Param('id') id: number, @Body() updateTpsDto: UpdateTpsDto) {
        return this.tpsService.update(id, updateTpsDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.tpsService.remove(id);
    }
}
