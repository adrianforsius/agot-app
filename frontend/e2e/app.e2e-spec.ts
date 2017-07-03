import { AgotAppPage } from './app.po';

describe('agot-app App', () => {
  let page: AgotAppPage;

  beforeEach(() => {
    page = new AgotAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
