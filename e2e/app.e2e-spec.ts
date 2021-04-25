import { AgencyPage } from './app.po';

describe('agency App', function() {
  let page: AgencyPage;

  beforeEach(() => {
    page = new AgencyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
