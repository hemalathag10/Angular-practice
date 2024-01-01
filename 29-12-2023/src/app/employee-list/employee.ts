// employee.ts

export interface Employee {
    name: string;
    id: number;
    role: string;
    basicSalary: number;
    pfDeduction?: number;
  taxDeduction?: number;
  finalSalary?: number;
  }
  // employee.ts

import { TaxCalculator } from '../salary-calculator/taxCalculator';
import { PfCalculator } from '../salary-calculator/pfCalculator';

export class EmployeeManagementSystem {
  employees: Employee[] = [];
  taxCalculator: TaxCalculator = new TaxCalculator();
  pfCalculator: PfCalculator = new PfCalculator();


  calculateSalaryDetails(employee: Employee): void {
    const taxPercentage = this.taxCalculator.getTaxPercentage(employee.role);
    const pfPercentage = this.pfCalculator.getPFPercentage(employee.role);

    employee.taxDeduction = (employee.basicSalary * taxPercentage) / 100;
    employee.pfDeduction = (employee.basicSalary * pfPercentage) / 100;
    employee.finalSalary = employee.basicSalary - employee.taxDeduction - employee.pfDeduction;
  }
}
