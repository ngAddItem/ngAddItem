import { NgAddItemPage } from './app.po';

describe('ng-add-item App', () => {
  let page: NgAddItemPage;

  beforeEach(() => {
    page = new NgAddItemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
