import { Injectable } from "@angular/core";
import { HOST } from "../shared/var.constant";
// DECLARAMOS LA VARIABLE IO ESTA SERA GLOBAL EN TODA LA APP
declare var io: any;

@Injectable({
  providedIn: "root"
})
export class WebsocketService {
  socketSession: any;

  constructor() {
    this.socketSession = io.sails.connect(HOST);
  }

  // METODO PARA CONECTARSE A LA SALA
  conectarSala(nombreSala: string) {
    if (this.socketSession) {
      this.socketSession.get(
        // /empresa/subscribe?nombreSala=sexSala
        HOST + "/sala/subscribe?nombreSala=" + nombreSala,
        (resData: any) => {
          console.log("Se conectó a la sala: ", resData);
        }
      );
    } else {
      console.log("No se pudo conectar a la sala: ", nombreSala);
    }
  }
}
