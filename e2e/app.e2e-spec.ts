import { AngularPPage } from './app.po';

describe('angular-p App', function() {
  let page: AngularPPage;

  beforeEach(() => {
    page = new AngularPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
