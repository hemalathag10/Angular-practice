// app/employee-list.component.ts

import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: Employee[] = [
    { id: 1, name: 'John Doe', position: 'Developer', status: 'active' },
    { id: 2, name: 'Jane Smith', position: 'Designer', status: 'inactive' },
    { id: 3, name: 'Bob Johnson', position: 'Manager', status: 'active' },
    { id: 4, name: 'Alice Williams', position: 'Tester', status: 'inactive' },
  ];

  statusFilter = 'all';
  nameFilter = ''; 


  get filteredEmployees(): Employee[] {
    return this.employees
      .filter(employee => this.statusFilter === 'all' || employee.status === this.statusFilter)
      .filter(employee => employee.name.toLowerCase().startsWith(this.nameFilter.toLowerCase()))
      ;
  } 
  
}
