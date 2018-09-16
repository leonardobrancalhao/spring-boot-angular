import { RotasModule } from './rotas.module';

describe('RotasModule', () => {
  let rotasModule: RotasModule;

  beforeEach(() => {
    rotasModule = new RotasModule();
  });

  it('should create an instance', () => {
    expect(rotasModule).toBeTruthy();
  });
});
