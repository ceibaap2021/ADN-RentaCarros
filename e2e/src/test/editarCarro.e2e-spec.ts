import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { browser } from 'protractor';
import { EditarPage } from '../page/carro/editar.po';

describe('workspace-project Carro', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let editar: EditarPage;
    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        editar = new EditarPage();
    });

    it('Deberia editar un Carro', () => {
        page.navigateTo();
        navBar.clickBotonListarCarros();
        editar.clickBotonEditarCarro();
        const PLACA_CARRO = 'WSD-856';
        const VALOR_CARRO = '8901';
        const MODELO_CARRO = '2018';
        const GAMA_CARRO = 'ALTA';
        const ESTADO_CARRO = true;

        editar.ingresarPlaca(PLACA_CARRO);
        editar.ingresarPrecio(VALOR_CARRO);
        editar.ingresarModelo(MODELO_CARRO);
        editar.ingresarGama(GAMA_CARRO);
        editar.ingresarEstado(ESTADO_CARRO);
        browser.sleep(3000);
        editar.guardarCarro();
        browser.sleep(2000);
        expect(editar.mensajeExitoso()).toBe(true);
        expect(editar.textLabelListar()).toBe(true);
        browser.sleep(5000);
    });

});
