import { FourPage } from './app.po';

describe('four App', () => {
  let page: FourPage;

  beforeEach(() => {
    page = new FourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
