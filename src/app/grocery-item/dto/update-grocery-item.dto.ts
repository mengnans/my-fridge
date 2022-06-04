import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateGroceryItemDto } from './create-grocery-item.dto';

export class UpdateGroceryItemDto extends PartialType(CreateGroceryItemDto) {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  expiryDate: Date;
}
