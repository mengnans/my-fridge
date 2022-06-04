import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ITrackChanges } from '../../interfaces/core/track-changes.interface';

@Schema()
export class GroceryItem implements ITrackChanges {
  id: string;

  @Prop()
  name: string;
  @Prop()
  expiryDate: Date;
  @Prop()
  updated: Date;
  @Prop()
  created: Date;
}

export type GroceryItemDocument = GroceryItem & Document;
export const GroceryItemSchema = SchemaFactory.createForClass(GroceryItem);
