import { GestorProyectosPage } from './app.po';

describe('gestor-proyectos App', () => {
  let page: GestorProyectosPage;

  beforeEach(() => {
    page = new GestorProyectosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
