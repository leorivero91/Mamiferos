export class Mamiferos{
    protected nombre:string;
    protected especie:string;
    protected alimentacion:string;

    constructor(pNombre:string,pEspecie:string,pAlimentacion:string){
        this.nombre=pNombre;
        this.especie=pEspecie;
        this.alimentacion=pAlimentacion;
    }

    public getName():string{
        return this.nombre;
    }   
    public setName(pNombre:string):void{
        this.nombre=pNombre;
    }
    public getEspecie():string{
        return this.especie;
    } 
    public setEspecie(pEspecie:string):void{
        this.especie=pEspecie;
    }
    public getAlimentacion():string{
        return this.alimentacion;
    } 
    public setAlimentacion(pAlimentacion:string):void{
        this.alimentacion=pAlimentacion;
    }    
}