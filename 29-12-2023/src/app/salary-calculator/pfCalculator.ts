// pfCalculator.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PfCalculator {
    getPFPercentage(role: string): number {
      switch (role.toLowerCase()) {
        case 'developer':
          return 7;
        case 'tester':
          return 5;
        case 'manager':
          return 8;
        default:
          return 5; // Default percentage for unknown roles
      }
    }
  
    calculatePF(basicSalary: number, role: string): number {
      const pfPercentage = this.getPFPercentage(role);
      return (basicSalary * pfPercentage) / 100;
    }
  }
  