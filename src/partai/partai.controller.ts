import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PartaiService } from './partai.service';
import { CreatePartaiDto } from './dto/create-partai.dto';
import { UpdatePartaiDto } from './dto/update-partai.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('partai')
@Controller('partai')
export class PartaiController {
    constructor(private readonly partaiService: PartaiService) { }

    @Get()
    async findAll() {
        return this.partaiService.findAll().catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get('search')
    async search(@Query('search') search: string) {
        return this.partaiService.findAllBySearch(search).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.partaiService.findOne(id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    @UseInterceptors(FileInterceptor('logo'))
    @ApiConsumes('multipart/form-data')
    async create(
        @UploadedFile() file: Express.Multer.File,
        @Body() createPartaiDto: CreatePartaiDto,
    ) {
        // console.log(file);
        return this.partaiService.create(createPartaiDto, file);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    @UseInterceptors(FileInterceptor('logo'))
    async update(
        @Param('id') id: number, 
        @UploadedFile() file: Express.Multer.File,
        @Body() updatePartaiDto: UpdatePartaiDto
    ) {
        return this.partaiService.update(id, updatePartaiDto, file);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.partaiService.remove(id);
    }
}
