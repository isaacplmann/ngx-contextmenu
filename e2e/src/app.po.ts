import { browser, element, by } from 'protractor';

export class NgrxQueryCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngx-context-menu-demo h1')).getText();
  }
}
