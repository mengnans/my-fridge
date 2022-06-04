import { Injectable } from '@nestjs/common';
import { CreateGroceryItemDto } from './dto/create-grocery-item.dto';
import { UpdateGroceryItemDto } from './dto/update-grocery-item.dto';

@Injectable()
export class GroceryItemService {
  create(createGroceryItemDto: CreateGroceryItemDto) {
    return 'This action adds a new groceryItem';
  }

  findAll() {
    return `This action returns all groceryItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} groceryItem`;
  }

  update(id: number, updateGroceryItemDto: UpdateGroceryItemDto) {
    return `This action updates a #${id} groceryItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} groceryItem`;
  }
}
