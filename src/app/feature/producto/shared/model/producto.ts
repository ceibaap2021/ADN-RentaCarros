export class Producto {
    id: string;
    placa: string;
    modelo: string;
    gama: string;
    valor: string;
    estado: boolean;

    constructor(
        id: string,
        placa: string,
        modelo: string,
        gama: string,
        valor: string,
        estado: boolean) {
        this.id = id;
        this.placa = placa;
        this.modelo = modelo;
        this.gama = gama;
        this.valor = valor;
        this.estado = estado;
    }
}
