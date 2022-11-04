"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TragamonedasPoderoso = void 0;
var tragamonedas_1 = require("./tragamonedas");
var fs = require("fs");
var TragamonedasPoderoso = /** @class */ (function (_super) {
    __extends(TragamonedasPoderoso, _super);
    function TragamonedasPoderoso(pTematica, pApuestaMinima, pDiaDeSuerte) {
        var _this = _super.call(this, pTematica, pApuestaMinima) || this;
        _this.diaDeSuerte = pDiaDeSuerte;
        _this.manual = fs.readFileSync('./manuales/manualTragamonedasPoderoso.txt', 'utf-8');
        return _this;
    }
    TragamonedasPoderoso.prototype.getDiaDeSuerte = function () {
        return this.diaDeSuerte;
    };
    TragamonedasPoderoso.prototype.setDiaDeSuerte = function (pDiaDeSuerte) {
        if (pDiaDeSuerte = true) {
            return true;
        }
        else {
            return false;
        }
    };
    TragamonedasPoderoso.prototype.iniciarTragamonedasPoderoso = function (apuesta) {
        console.log(this.manual);
        var lugar1 = Math.floor(Math.random() * 2) + 1;
        var lugar2 = Math.floor(Math.random() * 2) + 1;
        var lugar3 = Math.floor(Math.random() * 2) + 1;
        var combinacion = "".concat(lugar1, " ").concat(lugar2, " ").concat(lugar3);
        if ((lugar1 === lugar2 && lugar2 === lugar3) && (apuesta >= this.apuestaMinima) && (this.diaDeSuerte === true)) {
            console.log("La combinaci\u00F3n es ".concat(combinacion, ". El jugador ha ganado su apuesta: $").concat(apuesta * 5));
            return apuesta * 5;
        }
        else if ((lugar1 === lugar2 && lugar2 === lugar3) && (apuesta >= this.apuestaMinima)) {
            console.log("La combinaci\u00F3n es ".concat(combinacion, ". El jugador ha ganado su apuesta: $").concat(apuesta * 2));
            return apuesta * 2;
        }
        else if (apuesta >= this.apuestaMinima) {
            console.log("El resultado es ".concat(combinacion, ". El jugador ha perdido su apuesta: $").concat(-apuesta));
            return -apuesta;
        }
        else {
            throw new Error("Su apuesta es menor a la apuesta minima ($".concat(this.apuestaMinima, ")"));
        }
    };
    return TragamonedasPoderoso;
}(tragamonedas_1.Tragamonedas));
exports.TragamonedasPoderoso = TragamonedasPoderoso;
