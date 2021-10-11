import { by, element } from 'protractor';

export class CrearPage {
    private linkCrearProducto = element(by.id('linkCrearProducto'));
    private linkListarProductos = element(by.id('linkListarProducto'));
    private inputCodigoCarro = element(by.id('codigoCarro'));
    private inputPlacaCarro = element(by.id('placaCarro'));
    private inputModeloCarro = element(by.id('modeloCarro'));
    private inputGamaCarro = element(by.id('gamaCarro'));
    private inputPrecioCarro = element(by.id('PrecioCarro'));
    private estadoCarro = element(by.id('estadoCarro'));
    private btnguardarCarro = element(by.id('guardarCarro'));

    async mensajeExitoso() {
        await this.btnguardarCarro.isDisplayed();
    }
    async clickBotonCrearProductos() {
        await this.linkCrearProducto.click();
    }

    async clickBotonListarProductos() {
        await this.linkListarProductos.click();
    }

    async ingresarId(idCarro) {
        await this.inputCodigoCarro.sendKeys(idCarro);
    }

    async ingresarPlaca(placaCarro) {
        await this.inputPlacaCarro.sendKeys(placaCarro);
    }
    async ingresarModelo(modeloCarro) {
        await this.inputModeloCarro.sendKeys(modeloCarro);
    }
    async ingresarGama(gamaCarro) {
        await this.inputGamaCarro.sendKeys(gamaCarro);
    }
    async ingresarPrecio(precioCarro) {
        await this.inputPrecioCarro.sendKeys(precioCarro);
    }
    async ingresarEstado(estadoCarro) {
        await this.estadoCarro.sendKeys(estadoCarro);
    }
    async btnGuardar() {
        await this.btnguardarCarro.click();
    }


}
