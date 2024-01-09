// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { PublishedDataComponent } from './published-data/published-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    PublishedDataComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
