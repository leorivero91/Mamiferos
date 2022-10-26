import { Juegos } from "./juegos";
import { Persona } from "./persona";

export class Casino {
    protected sucursal : number;
    protected ciudad: string;
    protected aforo : Persona[] ;
    

    constructor(pSucursal:number,pCiudad:string,pAforo:Persona[]){
        this.sucursal=pSucursal;
        this.ciudad=pCiudad;
        this.aforo= pAforo;
        
    }
    public getSucursal(): number {
        return this.sucursal;
     }
     public setSucursal(pSucursal: number):number {
        return this.sucursal = pSucursal;
     }
     public getCiudad(): string {
        return this.ciudad;
     }
     public setCiudad(pCiudad: string): string {
        return this.ciudad = pCiudad;
     }
     public ValidacionAforo(personas:Persona[]){
        for(let i=0;i < personas.length;i++){
         return this.aforo = personas;
     }
}