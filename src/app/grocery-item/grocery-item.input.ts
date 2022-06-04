import { Schema as MongooseSchema } from 'mongoose';
export class CreateGroceryItemInput {
  name: string;
  expiryDate: Date;
}

export class ListGroceryItemInput {
  id?: MongooseSchema.Types.ObjectId;
  name?: string;
}

export class UpdateGroceryItemInput {
  id: MongooseSchema.Types.ObjectId;
  name?: string;
}
