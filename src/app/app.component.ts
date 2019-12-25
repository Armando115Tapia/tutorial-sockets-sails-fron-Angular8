import { Component, OnInit } from "@angular/core";
import { WebsocketService } from "./_services/websocket.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(public webService: WebsocketService) {}

  ngOnInit() {
    this.conectaSala();
  }
  conectaSala() {
    this.webService.conectarSala("salaX");
  }
}
