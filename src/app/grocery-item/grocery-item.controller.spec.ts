import { Test, TestingModule } from '@nestjs/testing';
import { GroceryItemController } from './grocery-item.controller';
import { GroceryItemService } from './grocery-item.service';

describe('GroceryItemController', () => {
  let controller: GroceryItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroceryItemController],
      providers: [GroceryItemService],
    }).compile();

    controller = module.get<GroceryItemController>(GroceryItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
