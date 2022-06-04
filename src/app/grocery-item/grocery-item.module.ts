import { GroceryItem, GroceryItemSchema } from './grocery-item.model';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroceryItemService } from './grocery-item.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GroceryItem.name, schema: GroceryItemSchema },
    ]),
  ],
  providers: [GroceryItemService],
})
export class GroceryItemModule {}
