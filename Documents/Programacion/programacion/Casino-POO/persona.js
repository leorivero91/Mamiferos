"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(pNombre, pApellido, pEdad) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (pNombre) {
        return this.nombre = pNombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setApellido = function (pApellido) {
        return this.apellido = pApellido;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (pEdad) {
        return this.edad = pEdad;
    };
    Persona.prototype.esMayorEdad = function () {
        if (this.edad >= 18) {
            return true;
        }
        else {
            return false;
        }
    };
    return Persona;
}());
exports.Persona = Persona;
