import { browser, by, element } from 'protractor';

export class NgrxQueryCliPage {
  navigateTo(): Promise<unknown> {
    return browser.get('/') as Promise<unknown>;
  }

  getParagraphText(): Promise<string> {
    return element(by.css('ngx-context-menu-demo h1')).getText() as Promise<string>;
  }
}
