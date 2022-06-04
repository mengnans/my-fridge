import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GorceryItemModule } from './gorcery-item/gorcery-item.module';
import { GroceryItemModule } from './grocery-item/grocery-item.module';

@Module({
  imports: [GorceryItemModule, GroceryItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
