import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { SalaryCalculatorComponent } from '../salary-calculator/salary-calculator.component';
import  {EmployeeListComponent} from '../employee-list/employee-list.component'
@NgModule({
  declarations: [EmployeeListComponent, SalaryCalculatorComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, EmployeeListComponent, SalaryCalculatorComponent]
})
export class SharedModule {}

