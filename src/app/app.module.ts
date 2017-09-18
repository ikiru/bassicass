// ========= Module ==========
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// ========= Component ========
import { AppComponent } from "./app.component";
import { WarningalertComponent } from "./warningalert/warningalert.component";
import { SuccessalertComponent } from "./successalert/successalert.component";

@NgModule({
  declarations: [AppComponent, WarningalertComponent, SuccessalertComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
