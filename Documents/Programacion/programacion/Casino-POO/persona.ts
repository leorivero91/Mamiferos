export class Persona {
  protected nombre: string;
  protected apellido: string;
  protected edad: number;
  
  constructor (pNombre: string, pApellido: string, pEdad: number) {
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.edad = pEdad;
  }
    
  public getNombre(): string {
    return this.nombre;
  }
    
  public setNombre(pNombre: string): string {
    return this.nombre = pNombre;
  }
  
  public getApellido(): string {
    return this.apellido;
  }
    
  public setApellido(pApellido: string): string {
    return this.apellido = pApellido;
  }
  
  public getEdad(): number {
    return this.edad;
  }
    
  public setEdad(pEdad: number): number {
    return this.edad = pEdad;
  }
    
  public esMayorEdad(): boolean {
    if (this.edad >= 18) {
      return true;
    } else {
     return false;
    }
  }
}