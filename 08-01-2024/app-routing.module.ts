// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { PublishedDataComponent } from './published-data/published-data.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  {
    path: 'create',
    component: EmployeeFormComponent,
    children: [{ path: '', component: EmployeeFormComponent }],
  },
  {
    path: 'publish',
    component: PublishedDataComponent,
    children: [{ path: '', component: PublishedDataComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
