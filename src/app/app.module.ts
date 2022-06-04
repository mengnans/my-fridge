import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroceryItemModule } from './grocery-item/grocery-item.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mango-db'),
    GroceryItemModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      debug: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
