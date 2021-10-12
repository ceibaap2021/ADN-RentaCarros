import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { CrearPage } from '../page/carro/crear.po';
import { browser } from 'protractor';

describe('workspace-project Carro', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let carro: CrearPage;
    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        carro = new CrearPage();
    });

    it('Deberia crear Carro', () => {
        const ID_CARRO = '566';
        const PLACA_CARRO = 'WSD-856';
        const VALOR_CARRO = '8901';
        const MODELO_CARRO = '2018';
        const GAMA_CARRO = 'ALTA';
        const ESTADO_CARRO = 'ALTA';

        page.navigateTo();
        navBar.clickBotonCrearCarro();
        carro.ingresarId(ID_CARRO);
        carro.ingresarPlaca(PLACA_CARRO);
        carro.ingresarPrecio(VALOR_CARRO);
        carro.ingresarModelo(MODELO_CARRO);
        carro.ingresarGama(GAMA_CARRO);
        carro.ingresarEstado(ESTADO_CARRO);

        carro.btnGuardar();

        expect(carro.mensajeExitoso()).toBe(true);
        browser.sleep(10000);
    });

});
