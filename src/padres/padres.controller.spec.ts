import { Test, TestingModule } from '@nestjs/testing';
import { PadresController } from './padres.controller';
import { PadresService } from './padres.service';

describe('PadresController', () => {
  let controller: PadresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PadresController],
      providers: [PadresService],
    }).compile();

    controller = module.get<PadresController>(PadresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
