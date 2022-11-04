"use strict";
exports.__esModule = true;
var casino_1 = require("./casino");
var dados_1 = require("./dados");
var jugador_1 = require("./jugador");
var puntoBanca_1 = require("./puntoBanca");
var tragamonedas_1 = require("./tragamonedas");
var tragamonedasPoderoso_1 = require("./tragamonedasPoderoso");
// import { Persona } from "./persona";
var jugador001 = new jugador_1.Jugador("Pedro", "Alvarez", 34, 25000);
var jugador002 = new jugador_1.Jugador("Pablo", "Gómes", 28, 250000);
var jugador003 = new jugador_1.Jugador("Ariel", "Durán", 18, 15000);
var jugador004 = new jugador_1.Jugador("Romina", "Perez", 16, 2500);
var jugador005 = new jugador_1.Jugador("Juana", "Dinardo", 30, 55000);
var jugador006 = new jugador_1.Jugador("María", "Fernandez", 54, 75000);
var jugador007 = new jugador_1.Jugador("James", "Bond", 40, 2500000);
var jugador008 = new jugador_1.Jugador("Luis", "Mendez", 65, 115000);
var jugador009 = new jugador_1.Jugador("Lu", "Chi", 74, 555000);
var jugador010 = new jugador_1.Jugador("Luciana", "Velez", 60, 50000);
var arrayJugadores = [jugador001, jugador002, jugador003, jugador004, jugador005, jugador006, jugador007, jugador008, jugador009, jugador010];
/* jugador001.setNombre('Ramiro');
console.log(jugador001.getNombre());
jugador001.setApellido('Cofreces');
console.log(jugador001.getApellido());
jugador001.setEdad(32);
console.log(jugador001.getEdad());
console.log(jugador001.esMayorEdad());
jugador001.setDineroInicial(75000);
console.log(jugador001.getDineroInicial());
console.log(jugador001.getDineroFinal()); // Revisar
jugador001.apalancamientoAprobado();
jugador001.cambioCategoria();
console.log(jugador001.creditoInicial());
console.log(jugador001.gananciaDelDia());
console.log(jugador001.getApalancamiento());
console.log(jugador001.getCategoria()); // Revisar
console.log(jugador001.porcentajeOperGanadoras()); */
var dados1 = new dados_1.Dados();
// dados1.iniciarDados(1000);
var puntoYBanca1 = new puntoBanca_1.PuntoYBanca();
// puntoYBanca1.iniciarPuntoyBanca(1000, "punto");
var tragamonedas1 = new tragamonedas_1.Tragamonedas("animales", 100);
// tragamonedas1.iniciarTragamonedas(1000);
var tragamonedasPoderoso1 = new tragamonedasPoderoso_1.TragamonedasPoderoso("animales", 50, true);
// tragamonedasPoderoso1.iniciarTragamonedasPoderoso(1000);
var casino1 = new casino_1.Casino(23, "Buenos Aires", tragamonedas1, tragamonedasPoderoso1, dados1, puntoYBanca1);
/* casino1.setSucursal(99);
console.log(casino1.getSucursal());
casino1.setCiudad('Ushuaia');
console.log(casino1.getCiudad());
casino1.validacionAforo(arrayJugadores);
console.log(casino1.getAforo()); */
/* casino1.jugarTragamonedas(jugador001, 1000);
casino1.jugarTragamonedasPoderoso(jugador001, 1000); */
casino1.jugarDados(jugador001, 1000);
// casino1.jugarPuntoYBanca(jugador001, 1000, "empate");
console.log(jugador001.getBilletera());
casino1.jugarTragamonedas(jugador001, 500);
casino1.jugarTragamonedas(jugador002, 1000);
casino1.jugarPuntoYBanca(jugador001, 1000, 'punto');
casino1.jugarTragamonedasPoderoso(jugador004, 1000, true);
// let juegosCasino: string [] = ['Dados','Punto y Banca', 'Tragamonedas', ' Tragamonedas Poderoso'];
// let opt:number;
// opt = readlineSync.keyInSelect(juegosCasino, "Bienvenido al Casino Royale, por favor elija su juego");
// if (juegosCasino[opt] === "Dados") {           
//    casino1.jugarDados(jugador001,500);
//    casino1.generarDatos(dados1);
//  } else if (juegosCasino[opt] === "Punto y Banca") {
//    casino1.jugarPuntoYBanca(jugador001,300,'Banca')  
//  } else if (juegosCasino[opt] === "Tragamonedas") {
//    casino1.jugarTragamonedas(jugador001,10000);    
//  } else if (juegosCasino[opt] === "Tragamonedas poderoso") {
//    casino1.jugarTragamonedasPoderoso(jugador001,11000);    
//  }
