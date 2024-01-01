// app.component.ts

import { Component } from '@angular/core';
import { Employee } from '../app/employee-list/employee';
import { SalaryCalculatorComponent } from '../app/salary-calculator/salary-calculator.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees: Employee[] = [];
  totalSalary: number=0

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  handleSalaryCalculated(totalSalary: number) {
    this.totalSalary = totalSalary;
  }
}
