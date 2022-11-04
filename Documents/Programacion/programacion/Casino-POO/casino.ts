import { Jugador } from "./jugador";
import { Tragamonedas } from "./tragamonedas";
import { TragamonedasPoderoso } from "./tragamonedasPoderoso";
import { Dados } from "./dados";
import { PuntoYBanca } from "./puntoBanca";

import * as fs from 'fs'

export class Casino {
   protected sucursal: number;
   protected ciudad: string;
   protected aforo: Jugador[];
   protected tragamonedas: Tragamonedas;
   protected tragamonedasPoderoso: TragamonedasPoderoso;
   protected dados: Dados;
   protected puntoBanca: PuntoYBanca;

   constructor (pSucursal: number, pCiudad: string, ptragamonedas: Tragamonedas,ptragamonedasPod: TragamonedasPoderoso, pDados: Dados, pPuntoBanca: PuntoYBanca) {
      this.sucursal = pSucursal;
      this.ciudad = pCiudad;
      this.aforo = [];
      this.tragamonedas = ptragamonedas;
      this.tragamonedasPoderoso = ptragamonedasPod;
      this.dados = pDados;
      this.puntoBanca = pPuntoBanca;
   }
   
   public getSucursal(): number {
      return this.sucursal;
   }
   
   public setSucursal (pSucursal: number):number {
      return this.sucursal = pSucursal;
   }
   
   public getCiudad(): string {
      return this.ciudad;
   }
   
   public setCiudad(pCiudad: string): string {
      return this.ciudad = pCiudad;
   }

   public getAforo(): Jugador[] {
      return this.aforo;
   }
   
   public validacionAforo (jugadores: Jugador[]) {
      for (let i = 0; i < jugadores.length; i++) {
         if (jugadores[i].esMayorEdad() === true) {
            this.aforo.push(jugadores[i])
            console.log(`El jugador ${jugadores[i].getNombre()} ${jugadores[i].getApellido()} ha ingresado en el casino ya que tiene ${jugadores[i].getEdad()} años`);
         }
      }
      return this.aforo;
   }

   public jugarTragamonedas(jugador: Jugador, apuesta: number): void {
      fs.readFileSync('./manuales/manualTragamonedas.txt', 'utf8');
      let resultado = this.tragamonedas.iniciarTragamonedas(apuesta);
      jugador.setBilletera(resultado + jugador.getBilletera());
   }
   
   public jugarTragamonedasPoderoso(jugador: Jugador, apuesta: number,diaDeSuerte:boolean): void {
      fs.readFileSync('./manuales/manualTragamonedasPoderoso.txt', 'utf8');
      let resultado = this.tragamonedasPoderoso.iniciarTragamonedasPoderoso(apuesta);
      jugador.setBilletera(resultado + jugador.getBilletera());
      
   }

   public jugarDados(jugador: Jugador, apuesta: number): void {
      fs.readFileSync('./manuales/manualDados.txt', 'utf8');
      let resultado = this.dados.iniciarDados(apuesta);
      jugador.setBilletera(resultado + jugador.getBilletera());
     
   }

   public jugarPuntoYBanca(jugador: Jugador, apuesta: number, apuestaQuien: string): void {
      fs.readFileSync('./manuales/manualPuntoBanca.txt', 'utf8');
      let resultado = this.puntoBanca.iniciarPuntoyBanca(apuesta, apuestaQuien);
      jugador.setBilletera(resultado + jugador.getBilletera());
   }
}

/* public cuentaCorriente(): void {
   let creditoCuenta = this.dineroFinal - this.creditoInicial();
   console.log(`El jugador ${this.nombre} tiene ${creditoCuenta} de credito en cuenta`);
} */
