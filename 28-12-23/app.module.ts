import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module'; // Import UserModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UserModule], // Add UserModule to imports
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
