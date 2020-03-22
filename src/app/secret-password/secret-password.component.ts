import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-secret-password",
  templateUrl: "./secret-password.component.html",
  styleUrls: ["./secret-password.component.scss"]
})
export class SecretPasswordComponent implements OnInit {
  passwordVisibility: boolean = false;
  passwordShownLog: Date[] = [];

  constructor() {}

  ngOnInit(): void {}

  onUpdatePasswordVisibility(): void {
    this.passwordVisibility = !this.passwordVisibility;
    this.passwordVisibility && this.passwordShownLog.push(new Date());
  }

  getBackgroundColor(index, startingIndex): string {
    return index >= startingIndex ? "blue" : "transparent";
  }
}
