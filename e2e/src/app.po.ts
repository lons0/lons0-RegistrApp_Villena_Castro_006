import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }
   //1
  async getTitleitem():Promise<string> {
    return element(by.css('app-root .bg')).getText();
  }
  //2
  async getTitleheader():Promise<string> {
    return element(by.css('app-root title')).getText();
  }
  //3
  async getTitlelimpiar():Promise<string> {
    return element(by.css('app-root title')).getText();
  }
  //4
  async getTitleText():Promise<string> {
    return element(by.css('app-root title')).getText();
  }
  //5
  async getTitleText1():Promise<string> {
    return element(by.css('app-root h2')).getText();
  }

}
