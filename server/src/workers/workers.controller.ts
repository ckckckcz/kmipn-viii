import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';

@Controller('api/workers')
export class WorkersController {
  constructor(private readonly workersService: WorkersService) {}

  @Get()
  findAll() {
    return { success: true, data: this.workersService.findAll() };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { success: true, data: this.workersService.findOne(id) };
  }

  @Post()
  create(@Body() dto: CreateWorkerDto) {
    return { success: true, data: this.workersService.create(dto) };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateWorkerDto) {
    return { success: true, data: this.workersService.update({ ...dto, id }) };
  }
}
