import { ManastudioPage } from './app.po';

describe('manastudio App', () => {
  let page: ManastudioPage;

  beforeEach(() => {
    page = new ManastudioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
