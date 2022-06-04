import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ITrackChanges } from '../../interfaces/core/track-changes.interface';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class GroceryItem implements ITrackChanges {
  @Field(() => String)
  id: string;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => Date)
  expiryDate: Date;

  @Field(() => Date)
  updated: Date;

  @Field(() => Date)
  created: Date;
}

export type GroceryItemDocument = GroceryItem & Document;
export const GroceryItemSchema = SchemaFactory.createForClass(GroceryItem);
