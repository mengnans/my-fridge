import { GroceryItemService } from './grocery-item.service';
import { GroceryItem } from './grocery-item.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import {
  ListGroceryItemInput,
  CreateGroceryItemInput,
  UpdateGroceryItemInput,
} from './grocery-item.input';

@Resolver(() => GroceryItem)
export class GroceryItemResolver {
  constructor(private groceryItemService: GroceryItemService) {}

  @Query(() => GroceryItem)
  async groceryItem(
    @Args('_id', { type: () => String }) id: MongooseSchema.Types.ObjectId,
  ) {
    return this.groceryItemService.getById(id);
  }

  @Query(() => [GroceryItem])
  async groceryItems(
    @Args('filters', { nullable: true }) filters?: ListGroceryItemInput,
  ) {
    return this.groceryItemService.list(filters);
  }

  @Mutation(() => GroceryItem)
  async createGroceryItem(@Args('payload') payload: CreateGroceryItemInput) {
    return this.groceryItemService.create(payload);
  }

  @Mutation(() => GroceryItem)
  async updateGroceryItem(@Args('payload') payload: UpdateGroceryItemInput) {
    return this.groceryItemService.update(payload);
  }

  @Mutation(() => GroceryItem)
  async deleteGroceryItem(
    @Args('_id', { type: () => String }) id: MongooseSchema.Types.ObjectId,
  ) {
    return this.groceryItemService.delete(id);
  }
}
