import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// forms module is required for two way data binding using ngModle directive, we add it to the imports
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import { SuccessAlertComponent } from "./success-alert/success-alert.component";
import { UserComponent } from './user/user.component';
import { SecretPasswordComponent } from './secret-password/secret-password.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UserComponent,
    SecretPasswordComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
