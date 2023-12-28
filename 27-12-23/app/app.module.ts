// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, TaskModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
