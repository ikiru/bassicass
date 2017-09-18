import { BasicassPage } from './app.po';

describe('basicass App', () => {
  let page: BasicassPage;

  beforeEach(() => {
    page = new BasicassPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
