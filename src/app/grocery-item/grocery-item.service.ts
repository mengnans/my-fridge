import { Injectable } from '@nestjs/common';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GroceryItem, GroceryItemDocument } from './grocery-item.model';

@Injectable()
export class GroceryItemService {
  constructor(
    @InjectModel(GroceryItem.name)
    private groceryItemModel: Model<GroceryItemDocument>,
  ) {}
}
