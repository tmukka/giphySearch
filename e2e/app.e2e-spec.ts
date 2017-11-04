import { GiphySearchPage } from './app.po';

describe('giphy-search App', () => {
  let page: GiphySearchPage;

  beforeEach(() => {
    page = new GiphySearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
