// taxCalculator.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaxCalculator {
    getTaxPercentage(role: string): number {
      switch (role.toLowerCase()) {
        case 'developer':
          return 12;
        case 'tester':
          return 10;
        case 'manager':
          return 15;
        default:
          return 10; // Default percentage for unknown roles
      }
    }
  
    calculateTax(basicSalary: number, role: string): number {
      const taxPercentage = this.getTaxPercentage(role);
      return (basicSalary * taxPercentage) / 100;
    }
  }
  