import { by, element } from 'protractor';

export class EditarPage {
    private linkListarCarros = element(by.id('linkListarCarro'));
    private modalAlertSucces = element(by.xpath('/html/body/div[3]/div/div[6]/button[1]'));
    private textEditar = element(by.xpath('/html/body/app-root/app-crear-carro/div/h1'));
    private textListar = element(by.xpath('/html/body/app-root/app-listar-carro/div/table/caption'));
   
    private inputCodigoCarro = element(by.id('codigoCarro'));
    private inputPlacaCarro = element(by.id('placaCarro'));
    private inputModeloCarro = element(by.id('modeloCarro'));
    private inputGamaCarro = element(by.id('gamaCarro'));
    private inputPrecioCarro = element(by.id('PrecioCarro'));
    private estadoCarro = element(by.id('estadoCarro'));
    private btnEditarCarro = element(by.id('guardarCarro'));
    
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
    async mensajeExitoso() {
        await this.modalAlertSucces.click();
    }
    async clickBotonEditarCarro() {
        await this.btnEditarCarro.click();
    }
    async clickBotonListarCarro() {
        await this.linkListarCarros.click();
    }
    async textLabelEditar() {
        await this.textEditar.isDisplayed();
    }
    async textLabelListar() {
        await this.textListar.isDisplayed();
    }

}
