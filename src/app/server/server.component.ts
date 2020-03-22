import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.scss"]
})
export class ServerComponent implements OnInit {
  serverId: number = 0;
  serverStatus: string = "";
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    this.serverId = Math.round(Math.random() * 10);
  }

  ngOnInit(): void {}

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(): string {
    return this.serverStatus === "offline" ? "red" : "green";
  }
}
