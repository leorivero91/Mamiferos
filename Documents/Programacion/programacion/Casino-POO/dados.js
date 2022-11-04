"use strict";
exports.__esModule = true;
exports.Dados = void 0;
var fs = require("fs");
var Dados = /** @class */ (function () {
    function Dados() {
        this.manual = fs.readFileSync('./manuales/manualDados.txt', 'utf-8');
    }
    Dados.prototype.iniciarDados = function (apuesta) {
        console.log(this.manual);
        var resultado = 0;
        var dado1 = Math.floor(Math.random() * 6) + 1;
        var dado2 = Math.floor(Math.random() * 6) + 1;
        resultado = dado1 + dado2;
        if (resultado == 7 || resultado == 11) {
            console.log("El resultado es ".concat(resultado, ". El jugador ha ganado su apuesta: $").concat(apuesta * 2));
            return apuesta * 2;
        }
        else if (resultado == 2 || resultado == 12) {
            console.log("El resultado es ".concat(resultado, ". El jugador ha ganado dos veces su apuesta: $").concat(apuesta * 3));
            return apuesta * 3;
        }
        else {
            console.log("El resultado es ".concat(resultado, ". El jugador ha perdido su apuesta: $").concat(-apuesta));
            return -apuesta;
        }
    };
    return Dados;
}());
exports.Dados = Dados;
