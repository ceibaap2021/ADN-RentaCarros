export class Producto {
    id: string;
    placa: string;
    modelo: string;
    gama: string;
    valor: string;

    constructor(
        id: string,
        placa: string,
        modelo: string,
        gama: string,
        valor: string) {
        this.id = id;
        this.placa = placa;
        this.modelo = modelo;
        this.gama = gama;
        this.valor = valor;
    }
}
