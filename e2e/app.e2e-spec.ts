import { ThreePlaneAngularPage } from './app.po';

describe('three-plane-angular App', () => {
  let page: ThreePlaneAngularPage;

  beforeEach(() => {
    page = new ThreePlaneAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
