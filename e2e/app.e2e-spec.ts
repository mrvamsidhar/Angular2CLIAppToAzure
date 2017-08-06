import { Angular2CLIAppPage } from './app.po';

describe('angular2-cliapp App', function() {
  let page: Angular2CLIAppPage;

  beforeEach(() => {
    page = new Angular2CLIAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
