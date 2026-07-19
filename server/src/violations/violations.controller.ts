import { Controller, Get, Param } from '@nestjs/common';
import { ViolationsService } from './violations.service';

@Controller('api/violations')
export class ViolationsController {
  constructor(private readonly violationsService: ViolationsService) {}

  @Get()
  findAll() {
    return { success: true, data: this.violationsService.findAll() };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { success: true, data: this.violationsService.findOne(id) };
  }
}
