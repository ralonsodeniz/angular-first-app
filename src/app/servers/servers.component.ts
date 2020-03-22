import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.scss"]
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created!";
  serverName: string = "New test server";
  serverCreated: boolean = false;
  servers: string[] = ["Testserver", "Testserver 2"];

  // everything inside the constructor is executed once the class is instanciated
  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  // we declare the event parameter as an DOM event type
  onUpdateServerName(event: Event): void {
    // we tell ts that the nature of the event target is from an html input element
    const { value }: { value: string } = <HTMLInputElement>event.target;
    this.serverName = value;
  }
}
