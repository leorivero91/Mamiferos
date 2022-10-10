import {Mamiferos} from "./Mamiferos"

export class Omnivoros extends Mamiferos{
    constructor(pNombre:string,pEspecie:string,pAlimentacion:string){
        super(pNombre,pEspecie,pAlimentacion)
    }
    public getAlimentacion(): string {
        return this.alimentacion;
    }
    public setAlimentacion(pAlimentacion: string): void {
        this.alimentacion="vegetales y carne "+pAlimentacion;
        console.log('Los animales omnívoros se alimentan tanto de vegetales como de carne animal');
    }
}
