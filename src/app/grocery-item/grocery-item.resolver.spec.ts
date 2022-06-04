import { Test, TestingModule } from '@nestjs/testing';
import { GroceryItemResolver } from './grocery-item.resolver';

describe('GroceryItemResolver', () => {
  let resolver: GroceryItemResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroceryItemResolver],
    }).compile();

    resolver = module.get<GroceryItemResolver>(GroceryItemResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
