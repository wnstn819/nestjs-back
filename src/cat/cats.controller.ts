import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Cat } from 'src/interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto, GetCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Get()
  findAll(): Cat[] {
    return this.catService.findAll();
  }

  @Get('db')
  findDb(): Promise<Cat[]> {
    return this.catService.findDb();
  }

  @Get(':id')
  findOne(@Param() params, @Query() query): string {
    console.log(params.id);
    console.log(query);
    return `This #${params.id}cat`;
  }

  @Post('add')
  create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto);
  }
}
