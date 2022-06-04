import {
  CreateGroceryItemInput,
  ListGroceryItemInput,
  UpdateGroceryItemInput,
} from './grocery-item.input';
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

  create(payload: CreateGroceryItemInput) {
    const createGroceryItem = new this.groceryItemModel(payload);
    return createGroceryItem.save();
  }

  getById(id: MongooseSchema.Types.ObjectId) {
    return this.groceryItemModel.findById(id).exec();
  }

  list(filter: ListGroceryItemInput) {
    return this.groceryItemModel.find({ ...filter }).exec();
  }

  update(payload: UpdateGroceryItemInput) {
    return this.groceryItemModel
      .findByIdAndUpdate(payload.id, payload, { new: true })
      .exec();
  }

  delete(id: MongooseSchema.Types.ObjectId) {
    return this.groceryItemModel.findByIdAndDelete(id).exec();
  }
}
