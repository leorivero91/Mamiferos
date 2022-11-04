"use strict";
exports.__esModule = true;
exports.Tragamonedas = void 0;
var fs = require("fs");
var Tragamonedas = /** @class */ (function () {
    function Tragamonedas(pTematica, pApuestaMinima) {
        this.tematica = pTematica;
        this.apuestaMinima = pApuestaMinima;
        this.manual = fs.readFileSync('./manuales/manualTragamonedas.txt', 'utf-8');
    }
    Tragamonedas.prototype.getTematica = function () {
        return this.tematica;
    };
    Tragamonedas.prototype.setTematica = function (pTematica) {
        this.tematica = pTematica;
    };
    Tragamonedas.prototype.getApuesta = function () {
        return this.apuestaMinima;
    };
    Tragamonedas.prototype.setApuesta = function (pApuestaMinima) {
        this.apuestaMinima = pApuestaMinima;
    };
    Tragamonedas.prototype.iniciarTragamonedas = function (apuesta) {
        console.log(this.manual);
        var lugar1 = Math.floor(Math.random() * 4) + 1;
        var lugar2 = Math.floor(Math.random() * 4) + 1;
        var lugar3 = Math.floor(Math.random() * 4) + 1;
        var combinacion = "".concat(lugar1, " ").concat(lugar2, " ").concat(lugar3);
        if ((lugar1 === lugar2 && lugar2 === lugar3) && (apuesta >= this.apuestaMinima)) {
            console.log("La combinaci\u00F3n es ".concat(combinacion, ". El jugador ha ganado su apuesta: $").concat(apuesta * 2));
            return apuesta * 2;
        }
        else if (apuesta >= this.apuestaMinima) {
            console.log("La combinaci\u00F3n es ".concat(combinacion, ". El jugador ha perdido su apuesta: $").concat(-apuesta));
            return -apuesta;
        }
        else {
            throw new Error("Su apuesta es menor a la apuesta minima ($".concat(this.apuestaMinima, ")"));
        }
    };
    return Tragamonedas;
}());
exports.Tragamonedas = Tragamonedas;
