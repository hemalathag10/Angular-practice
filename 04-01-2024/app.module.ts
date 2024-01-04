// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeMessageComponent } from './leave/employee-message.component';
import { AdminMessageComponent } from './leave/admin-message.component';
import { MessageService } from './leave/message.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeMessageComponent,
    AdminMessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, // Include AppRoutingModule here
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
