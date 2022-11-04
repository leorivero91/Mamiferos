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
exports.Jugador = void 0;
var persona_1 = require("./persona");
var Jugador = /** @class */ (function (_super) {
    __extends(Jugador, _super);
    function Jugador(pNombre, pApellido, pEdad, pDineroInicial) {
        var _this = _super.call(this, pNombre, pApellido, pEdad) || this;
        _this.dineroInicial = pDineroInicial;
        _this.apalancamiento = 1;
        _this.dineroFinal = pDineroInicial;
        _this.categoria = "Jugador Comun";
        return _this;
    }
    Jugador.prototype.getBilletera = function () {
        return this.dineroInicial;
    };
    Jugador.prototype.setBilletera = function (dinero) {
        this.dineroInicial = dinero;
    };
    Jugador.prototype.getDineroFinal = function () {
        return this.dineroFinal - (this.dineroInicial * this.apalancamiento - this.dineroInicial);
    };
    Jugador.prototype.gananciaDelDia = function () {
        var ganancia = this.dineroFinal - (this.dineroInicial * this.apalancamiento - this.dineroInicial) - this.dineroInicial;
        return ganancia;
    };
    Jugador.prototype.getApalancamiento = function () {
        return this.apalancamiento;
    };
    Jugador.prototype.getCategoria = function () {
        return this.categoria;
    };
    Jugador.prototype.porcentajeOperGanadoras = function () {
        var porcentaje = (this.dineroInicial * 100) / this.dineroFinal;
        return porcentaje;
    };
    Jugador.prototype.creditoInicial = function () {
        var credito = this.dineroInicial * this.apalancamiento;
        return credito;
    };
    Jugador.prototype.cambioCategoria = function () {
        if (this.dineroInicial >= 1000000 && this.porcentajeOperGanadoras() >= 45) {
            this.categoria = "Jugador VIP";
        }
        else {
            this.categoria = "Jugador Comun";
        }
        console.log("El jugador tiene la siguiente nueva categor\u00EDa: ".concat(this.categoria));
    };
    Jugador.prototype.apalancamientoAprobado = function () {
        if (this.categoria == "Jugador VIP") {
            this.apalancamiento = 2;
        }
        else if (this.porcentajeOperGanadoras() >= 60 && this.apalancamiento == 2) {
            this.apalancamiento = 3;
        }
        console.log("El jugador tiene el siguiente apalancamiento aprobado: ".concat(this.apalancamiento));
    };
    return Jugador;
}(persona_1.Persona));
exports.Jugador = Jugador;
