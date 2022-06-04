import { MongooseModule } from '@nestjs/mongoose';
import { GroceryItem, GroceryItemSchema } from './entities/grocery-item.entity';
import { Module } from '@nestjs/common';
import { GroceryItemService } from './grocery-item.service';
import { GroceryItemController } from './grocery-item.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GroceryItem.name, schema: GroceryItemSchema },
    ]),
  ],
  controllers: [GroceryItemController],
  providers: [GroceryItemService],
})
export class GroceryItemModule {}
