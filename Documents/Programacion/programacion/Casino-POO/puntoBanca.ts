import * as fs from 'fs'

export class PuntoYBanca {
    private manual:string;

constructor(){
    this.manual=fs.readFileSync('./manuales/manualPuntoBanca.txt','utf-8');
}

    public iniciarPuntoyBanca(apuesta: number, apuestaQuien: string): number {
        console.log(this.manual);
        let resultadoPunto: number = 0;
        let resultadoBanca: number = 0;
        let cartaPunto1: number = Math.floor(Math.random() * 9) + 1;
        let cartaPunto2: number = Math.floor(Math.random() * 9) + 1;
        let cartaBanca1: number = Math.floor(Math.random() * 9) + 1;
        let cartaBanca2: number = Math.floor(Math.random() * 9) + 1;
        resultadoPunto = cartaPunto1 + cartaPunto2;
        resultadoBanca = cartaBanca1 + cartaBanca2;

        if (resultadoPunto > 10) {
            resultadoPunto -= 10;
        }

        if(resultadoBanca > 10) {
            resultadoBanca -= 10;
        }

        if (resultadoPunto == 8 || resultadoPunto == 9) {
            console.log(`El resultado es ${resultadoPunto}. El jugador ha ganado su apuesta: $${apuesta * 2}`);
            return apuesta * 2;
        } else if (apuestaQuien.toLowerCase() == "punto" && resultadoPunto > resultadoBanca) {
            console.log(`El resultado del Punto es ${resultadoPunto} y el resultado de la Banca es ${resultadoBanca}. El jugador ha ganado su apuesta: $${apuesta * 2}`);
            return apuesta * 2;
        } else if (apuestaQuien.toLowerCase() == "banca" && resultadoBanca > resultadoPunto) {
            console.log(`El resultado de la Banca es ${resultadoBanca} y el resultado del Punto es ${resultadoPunto}. El jugador ha ganado su apuesta: $${apuesta * 2}`);
            return apuesta * 2; 
        } else if (apuestaQuien.toLowerCase() == "empate" && resultadoPunto == resultadoBanca) {
            console.log(`El resultado del Punto es ${resultadoPunto} y el resultado de la Banca es ${resultadoBanca}. El jugador ha ganado su apuesta: $${apuesta * 8}`);
            return apuesta * 8;
        } else {
            console.log(`El resultado del Punto es ${resultadoPunto} y el resultado de la Banca es ${resultadoBanca}. El jugador ha perdido su apuesta: $${-apuesta}`);
            return -apuesta;
        }
    }
}