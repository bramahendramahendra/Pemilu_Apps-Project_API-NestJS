import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { KabupatenService } from './kabupaten.service';
import { CreateKabupatenDto } from './dto/create-kabupaten.dto';

@Controller('kabupaten')
export class KabupatenController {
    constructor(private readonly kabupatenService: KabupatenService) {}

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() createKabupatenDto: CreateKabupatenDto) {
        return this.kabupatenService.create(createKabupatenDto);
    }
}
