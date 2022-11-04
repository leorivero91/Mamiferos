import * as fs from 'fs'

export class Tragamonedas {
  protected tematica: string;
  protected apuestaMinima: number;
  protected manual:string;

  constructor (pTematica: string, pApuestaMinima: number){
    this.tematica = pTematica;
    this.apuestaMinima = pApuestaMinima;
    this.manual=fs.readFileSync('./manuales/manualTragamonedas.txt','utf-8');
  }

  public getTematica(): string {
    return this.tematica;
  }

  public setTematica (pTematica: string): void {
    this.tematica = pTematica;
  }

  public getApuesta(): number {
    return this.apuestaMinima;
  }

  public setApuesta (pApuestaMinima: number) {
    this.apuestaMinima = pApuestaMinima;
  }

  public iniciarTragamonedas(apuesta: number): number {
    console.log(this.manual);
    let lugar1: number = Math.floor(Math.random() * 4) + 1;
    let lugar2: number = Math.floor(Math.random() * 4) + 1;
    let lugar3: number = Math.floor(Math.random() * 4) + 1;
    let combinacion = `${lugar1} ${lugar2} ${lugar3}`;

    if ((lugar1 === lugar2 && lugar2 === lugar3) && (apuesta >= this.apuestaMinima)) {
      console.log(`La combinación es ${combinacion}. El jugador ha ganado su apuesta: $${apuesta * 2}`);
      return apuesta * 2;
    } else if (apuesta >= this.apuestaMinima) {
      console.log(`La combinación es ${combinacion}. El jugador ha perdido su apuesta: $${-apuesta}`);
      return -apuesta;
    } else {
      throw new Error(`Su apuesta es menor a la apuesta minima ($${this.apuestaMinima})`);
    }
 }
}