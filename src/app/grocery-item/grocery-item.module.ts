import { GroceryItem, GroceryItemSchema } from './grocery-item.model';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroceryItemService } from './grocery-item.service';
import { GroceryItemResolver } from './grocery-item.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GroceryItem.name, schema: GroceryItemSchema },
    ]),
  ],
  providers: [GroceryItemService, GroceryItemResolver],
})
export class GroceryItemModule {}
