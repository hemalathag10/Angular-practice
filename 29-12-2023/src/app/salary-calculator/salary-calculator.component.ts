// salary-calculator.component.ts

import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { PfCalculator } from '../salary-calculator/pfCalculator';
import { TaxCalculator } from '../salary-calculator/taxCalculator';
import { Employee } from '../employee-list/employee';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls:['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent {
  @Output() employeeAdded = new EventEmitter<Employee>();
  employeeForm: FormGroup;

  // Access form controls in the component
  get name(): AbstractControl | null { return this.employeeForm.get('name'); }
  get id(): AbstractControl | null { return this.employeeForm.get('id'); }
  get role(): AbstractControl | null { return this.employeeForm.get('role'); }
  get basicSalary(): AbstractControl | null { return this.employeeForm.get('basicSalary'); }

  constructor(private fb: FormBuilder, private pfCalculator: PfCalculator, private taxCalculator: TaxCalculator) {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      id: [0, Validators.required],
      role: ['', Validators.required],
      basicSalary: [0, Validators.required],
    });
  }

  addEmployee() {
    if (this.employeeForm.valid) {
      const employee: Employee = this.employeeForm.value;
      this.calculateSalaryDetails(employee);

      this.employeeAdded.emit(employee);
      this.employeeForm.reset();
    }
  }

  private calculateSalaryDetails(employee: Employee): void {
    const taxPercentage = this.taxCalculator.getTaxPercentage(employee.role);
    const pfPercentage = this.pfCalculator.getPFPercentage(employee.role);

    employee.taxDeduction = (employee.basicSalary * taxPercentage) / 100;
    employee.pfDeduction = (employee.basicSalary * pfPercentage) / 100;
    employee.finalSalary = employee.basicSalary - employee.taxDeduction - employee.pfDeduction;
  }
}
