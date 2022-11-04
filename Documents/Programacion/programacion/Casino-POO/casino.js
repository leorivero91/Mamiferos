"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var fs = require("fs");
var Casino = /** @class */ (function () {
    function Casino(pSucursal, pCiudad, ptragamonedas, ptragamonedasPod, pDados, pPuntoBanca) {
        this.sucursal = pSucursal;
        this.ciudad = pCiudad;
        this.aforo = [];
        this.tragamonedas = ptragamonedas;
        this.tragamonedasPoderoso = ptragamonedasPod;
        this.dados = pDados;
        this.puntoBanca = pPuntoBanca;
    }
    Casino.prototype.getSucursal = function () {
        return this.sucursal;
    };
    Casino.prototype.setSucursal = function (pSucursal) {
        return this.sucursal = pSucursal;
    };
    Casino.prototype.getCiudad = function () {
        return this.ciudad;
    };
    Casino.prototype.setCiudad = function (pCiudad) {
        return this.ciudad = pCiudad;
    };
    Casino.prototype.getAforo = function () {
        return this.aforo;
    };
    Casino.prototype.validacionAforo = function (jugadores) {
        for (var i = 0; i < jugadores.length; i++) {
            if (jugadores[i].esMayorEdad() === true) {
                this.aforo.push(jugadores[i]);
                console.log("El jugador ".concat(jugadores[i].getNombre(), " ").concat(jugadores[i].getApellido(), " ha ingresado en el casino ya que tiene ").concat(jugadores[i].getEdad(), " a\u00F1os"));
            }
        }
        return this.aforo;
    };
    Casino.prototype.jugarTragamonedas = function (jugador, apuesta) {
        fs.readFileSync('./manuales/manualTragamonedas.txt', 'utf8');
        var resultado = this.tragamonedas.iniciarTragamonedas(apuesta);
        jugador.setBilletera(resultado + jugador.getBilletera());
    };
    Casino.prototype.jugarTragamonedasPoderoso = function (jugador, apuesta, diaDeSuerte) {
        fs.readFileSync('./manuales/manualTragamonedasPoderoso.txt', 'utf8');
        var resultado = this.tragamonedasPoderoso.iniciarTragamonedasPoderoso(apuesta);
        jugador.setBilletera(resultado + jugador.getBilletera());
    };
    Casino.prototype.jugarDados = function (jugador, apuesta) {
        fs.readFileSync('./manuales/manualDados.txt', 'utf8');
        var resultado = this.dados.iniciarDados(apuesta);
        jugador.setBilletera(resultado + jugador.getBilletera());
    };
    Casino.prototype.jugarPuntoYBanca = function (jugador, apuesta, apuestaQuien) {
        fs.readFileSync('./manuales/manualPuntoBanca.txt', 'utf8');
        var resultado = this.puntoBanca.iniciarPuntoyBanca(apuesta, apuestaQuien);
        jugador.setBilletera(resultado + jugador.getBilletera());
    };
    return Casino;
}());
exports.Casino = Casino;
/* public cuentaCorriente(): void {
   let creditoCuenta = this.dineroFinal - this.creditoInicial();
   console.log(`El jugador ${this.nombre} tiene ${creditoCuenta} de credito en cuenta`);
} */
