import { FoodOrderingOnlinePage } from './app.po';

describe('food-ordering-online App', () => {
  let page: FoodOrderingOnlinePage;

  beforeEach(() => {
    page = new FoodOrderingOnlinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
