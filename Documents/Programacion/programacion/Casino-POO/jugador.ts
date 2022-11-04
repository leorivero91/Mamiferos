import { Persona } from "./persona";
import * as fs from "fs";

export class Jugador extends Persona {
  protected dineroInicial: number;
  protected dineroFinal: number;
  protected apalancamiento: number;
  protected categoria: string;

  constructor (pNombre: string, pApellido: string, pEdad: number, pDineroInicial: number) {
    super (pNombre, pApellido, pEdad);
    this.dineroInicial = pDineroInicial;
    this.apalancamiento = 1;
    this.dineroFinal = pDineroInicial;
    this.categoria = "Jugador Comun";
  }

  public getBilletera(): number {
    return this.dineroInicial;
  }

  public setBilletera(dinero: number) {
    this.dineroInicial = dinero;
  }
  
  public getDineroFinal(): number {
    return this.dineroFinal - (this.dineroInicial * this.apalancamiento - this.dineroInicial);
  }

  public gananciaDelDia(): number {
    let ganancia: number = this.dineroFinal - (this.dineroInicial * this.apalancamiento - this.dineroInicial) - this.dineroInicial;
    return ganancia;
  }
  
  public getApalancamiento(): number {
    return this.apalancamiento;
  }
  
  public getCategoria(): string {
    return this.categoria;
  }
  
  public porcentajeOperGanadoras(): number {
    let porcentaje = (this.dineroInicial * 100) / this.dineroFinal;
    return porcentaje;
  }
  
  public creditoInicial(): number {
    let credito = this.dineroInicial * this.apalancamiento;
    return credito;
  }
  
  public cambioCategoria(): void {
    if (this.dineroInicial >= 1000000 && this.porcentajeOperGanadoras() >= 45) {
      this.categoria = "Jugador VIP";
    } else {
      this.categoria = "Jugador Comun";
    }
    console.log(`El jugador tiene la siguiente nueva categoría: ${this.categoria}`);
  }

  public apalancamientoAprobado(): void {
    if (this.categoria == "Jugador VIP") {
      this.apalancamiento = 2;
    } else if (this.porcentajeOperGanadoras() >= 60 && this.apalancamiento == 2) {
      this.apalancamiento = 3;
    }
    console.log(`El jugador tiene el siguiente apalancamiento aprobado: ${this.apalancamiento}`);
  }
  
  }