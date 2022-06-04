import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  GroceryItem,
  GroceryItemDocument,
} from './entities/grocery-item.entity';
import { Injectable } from '@nestjs/common';
import { CreateGroceryItemDto } from './dto/create-grocery-item.dto';
import { UpdateGroceryItemDto } from './dto/update-grocery-item.dto';

@Injectable()
export class GroceryItemService {
  constructor(
    @InjectModel(GroceryItem.name)
    private readonly groceryItemModel: Model<GroceryItemDocument>,
  ) {}

  create(createGroceryItemDto: CreateGroceryItemDto) {
    const newGroceryItem = new this.groceryItemModel(createGroceryItemDto);
    return newGroceryItem.save();
  }

  findAll() {
    return `This action returns all groceryItem`;
  }

  async findOne(id: string) {
    return await this.groceryItemModel.findById(id);
  }

  update(id: string, updateGroceryItemDto: UpdateGroceryItemDto) {
    return `This action updates a #${id} groceryItem`;
  }

  remove(id: string) {
    return `This action removes a #${id} groceryItem`;
  }
}
