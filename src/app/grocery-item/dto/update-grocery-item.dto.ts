import { PartialType } from '@nestjs/mapped-types';
import { CreateGroceryItemDto } from './create-grocery-item.dto';

export class UpdateGroceryItemDto extends PartialType(CreateGroceryItemDto) {}
