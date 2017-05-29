import { SeriesangularPage } from './app.po';

describe('seriesangular App', () => {
  let page: SeriesangularPage;

  beforeEach(() => {
    page = new SeriesangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
