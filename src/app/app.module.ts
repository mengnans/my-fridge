import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { GroceryItemModule } from './grocery-item/grocery-item.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mango-db'),
    GroceryItemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
