import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    clickBotonListarCarro = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkCrearCarro = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    btnCarroCreado = element(by.xpath('//*[@id="swal2-title"]'));
    btnEliminarCarro= element(by.xpath('//*[@id="eliminar"]/button'));

    async clickBotonListarCarros() {
        await this.clickBotonListarCarro.click();
    }
    async clickBotonCrearCarro() {
        await this.linkCrearCarro.click();
    }
    async clickBotonElimnarCarro() {
        await this.btnEliminarCarro.click();
    }
}
