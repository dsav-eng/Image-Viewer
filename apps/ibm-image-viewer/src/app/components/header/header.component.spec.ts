import { HeaderComponent } from './header.component';
const { TranslocoService } = jest.requireActual('@ngneat/transloco');

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let mockTranslocoService: typeof TranslocoService;

  beforeEach(() => {
    mockTranslocoService = {
      ...TranslocoService,
      getActiveLang: jest.fn(),
      setActiveLang: jest.fn(),
    };

    component = new HeaderComponent(mockTranslocoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleActiveLanguage', () => {
    it('should set langugage to English if active language is French', () => {
      mockTranslocoService.getActiveLang.mockReturnValue('en');
      const expectedArgument = 'fr';

      component.toggleActiveLanguage();

      expect(mockTranslocoService.setActiveLang).toBeCalledWith(
        expectedArgument
      );
    });
  });
});
