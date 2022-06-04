import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type GroceryItemDocument = GroceryItem & Document;

@Schema({ timestamps: true })
export class GroceryItem {
  @Prop({ required: true, type: String })
  name: string;
  @Prop({ required: false, type: Date })
  expiryDate?: Date;
}

export const GroceryItemSchema = SchemaFactory.createForClass(GroceryItem);
