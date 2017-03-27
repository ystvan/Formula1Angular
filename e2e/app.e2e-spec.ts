import { Formula1Page } from './app.po';

describe('formula1 App', function() {
  let page: Formula1Page;

  beforeEach(() => {
    page = new Formula1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
