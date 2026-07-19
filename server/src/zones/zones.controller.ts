import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';

@Controller('api/zones')
export class ZonesController {
  constructor(private readonly zonesService: ZonesService) {}

  @Get()
  findAll() {
    return { success: true, data: this.zonesService.findAll() };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { success: true, data: this.zonesService.findOne(id) };
  }

  @Post()
  create(@Body() dto: CreateZoneDto) {
    return { success: true, data: this.zonesService.create(dto) };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateZoneDto) {
    return { success: true, data: this.zonesService.update({ ...dto, id }) };
  }
}
