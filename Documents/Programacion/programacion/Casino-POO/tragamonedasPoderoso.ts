import { Tragamonedas } from "./tragamonedas";
import * as fs from 'fs'

export class TragamonedasPoderoso extends Tragamonedas {
  protected diaDeSuerte: boolean;
  protected manual: string;

  constructor (pTematica: string, pApuestaMinima: number, pDiaDeSuerte: boolean) {
    super (pTematica, pApuestaMinima);
    this.diaDeSuerte = pDiaDeSuerte;
    this.manual=fs.readFileSync('./manuales/manualTragamonedasPoderoso.txt', 'utf-8');
  }
  
  public getDiaDeSuerte() {
    return this.diaDeSuerte;
  }

  public setDiaDeSuerte(pDiaDeSuerte: boolean) {
    if(pDiaDeSuerte=true){
      return true;
    }else {
    return false;
   }
  }

  public iniciarTragamonedasPoderoso(apuesta: number): number {
    console.log(this.manual);
    let lugar1: number = Math.floor(Math.random() * 2) + 1;
    let lugar2: number = Math.floor(Math.random() * 2) + 1;
    let lugar3: number = Math.floor(Math.random() * 2) + 1;
    let combinacion = `${lugar1} ${lugar2} ${lugar3}`;

    if ((lugar1 === lugar2 && lugar2 === lugar3) && (apuesta >= this.apuestaMinima) && (this.diaDeSuerte === true)) {
      console.log(`La combinación es ${combinacion}. El jugador ha ganado su apuesta: $${apuesta * 5}`);
      return apuesta * 5;
    } else if ((lugar1 === lugar2 && lugar2 === lugar3) && (apuesta >= this.apuestaMinima)) {
      console.log(`La combinación es ${combinacion}. El jugador ha ganado su apuesta: $${apuesta * 2}`);
      return apuesta * 2;
    } else if (apuesta >= this.apuestaMinima) {
      console.log(`El resultado es ${combinacion}. El jugador ha perdido su apuesta: $${-apuesta}`);
      return -apuesta;
    } else {
      throw new Error(`Su apuesta es menor a la apuesta minima ($${this.apuestaMinima})`);
    }
  }
}
