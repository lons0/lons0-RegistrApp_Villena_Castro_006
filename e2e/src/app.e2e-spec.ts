import { AppPage } from './app.po';

describe('Ejemplos de pruebas', () => {
  let page: AppPage;

  //configuración del testing 
  beforeEach(() => {
    page = new AppPage();
  });

  //testing a unidades de codigo
  it('Prueba 1', async () => {
    await page.navigateTo();
     expect(await page.getTitleitem()).toEqual('');
  });

  it('Prueba 2', async () => {
    await page.navigateTo();
     expect(page.getTitleheader()).toContain('RegistrAPP');
  });

  it('Prueba 3', async () => {
     page.navigateTo();
     expect(page.getTitlelimpiar()).toContain('Iniciar sesión');
  });

  it('Prueba 4', () => {
    page.navigateTo();
    expect(page.getTitleText()).toContain('menu');
  });
  it('Prueba 5', () => {
    page.navigateTo();
    expect(page.getTitleText1()).toContain('Cerrar Sesion');
  });

});
