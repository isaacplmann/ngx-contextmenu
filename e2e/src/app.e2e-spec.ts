import { NgrxQueryCliPage } from './app.po';

describe('ngrx-query App', () => {
  let page: NgrxQueryCliPage;

  beforeEach(() => {
    page = new NgrxQueryCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('nq works!');
  });
});
