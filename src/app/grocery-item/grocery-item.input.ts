import { InputType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class CreateGroceryItemInput {
  @Field(() => String)
  name: string;
  @Field(() => Date)
  expiryDate: Date;
}

@InputType()
export class ListGroceryItemInput {
  @Field(() => String, { nullable: true })
  id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
}

@InputType()
export class UpdateGroceryItemInput {
  @Field(() => String)
  id: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
}
