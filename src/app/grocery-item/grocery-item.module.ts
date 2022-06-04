import { Module } from '@nestjs/common';
import { GroceryItemService } from './grocery-item.service';
import { GroceryItemController } from './grocery-item.controller';

@Module({
  controllers: [GroceryItemController],
  providers: [GroceryItemService],
})
export class GroceryItemModule {}
