// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeMessageComponent } from './leave/employee-message.component';
import { AdminMessageComponent } from './leave/admin-message.component';

const routes: Routes = [
  { path: 'employee-message', component: EmployeeMessageComponent },
  { path: 'admin-message', component: AdminMessageComponent },
  { path: '', redirectTo: '/employee-message', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
