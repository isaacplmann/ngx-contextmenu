import { browser, element, by } from 'protractor';

export class NgrxQueryCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nq-root h1')).getText();
  }
}
