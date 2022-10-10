import { Mamiferos } from "./Mamiferos"

export class Herviboros extends Mamiferos{
    constructor(pNombre:string,pEspecie:string,pAlimentacion:string){
        super(pNombre,pEspecie,pAlimentacion)
    }
    public getAlimentacion(): string {
        return this.alimentacion;
    }
    public setAlimentacion(pAlimentacion: string): void {
        this.alimentacion="vegetales "+pAlimentacion;
        console.log('Los animales hervíboros se alimentan de vegetales');
    }
}