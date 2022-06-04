import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GroceryItemService } from './grocery-item.service';
import { CreateGroceryItemDto } from './dto/create-grocery-item.dto';
import { UpdateGroceryItemDto } from './dto/update-grocery-item.dto';

@Controller('grocery-item')
export class GroceryItemController {
  constructor(private readonly groceryItemService: GroceryItemService) {}

  @Post()
  create(@Body() createGroceryItemDto: CreateGroceryItemDto) {
    return this.groceryItemService.create(createGroceryItemDto);
  }

  @Get()
  findAll() {
    return this.groceryItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groceryItemService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGroceryItemDto: UpdateGroceryItemDto,
  ) {
    return this.groceryItemService.update(id, updateGroceryItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groceryItemService.remove(id);
  }
}
