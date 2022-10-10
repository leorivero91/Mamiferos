import {Mamiferos} from "./Mamiferos"

export class Carnivoros extends Mamiferos{
    constructor(pNombre:string,pEspecie:string,pAlimentacion:string){
        super(pNombre,pEspecie,pAlimentacion)
    }
    public getAlimentacion(): string {
        return this.alimentacion;
    }
    public setAlimentacion(pAlimentacion: string): void {
        this.alimentacion="carne " +pAlimentacion;
        console.log('Los animales carnívoros se alimentan de carne animal');
    }
}



