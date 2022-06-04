import { ApiProperty } from '@nestjs/swagger';
export class CreateGroceryItemDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  expiryDate: Date;
}
