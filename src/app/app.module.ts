import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroceryItemModule } from './grocery-item/grocery-item.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mango-db'),
    GroceryItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
