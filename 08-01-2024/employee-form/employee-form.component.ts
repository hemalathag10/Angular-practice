import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service'; // Adjust the path based on your project structure

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
})
export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;

  degrees = ['Bachelor', 'Master', 'PhD'];
  designations = ['Developer', 'Manager', 'Designer'];
  branches = ['IT', 'HR', 'Finance'];

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      degree: ['', Validators.required],
      designation: ['', Validators.required],
      branch: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const formData = this.employeeForm.value;
      this.dataService.addPublishedData(formData);
      console.log('Form submitted:', formData);
      this.employeeForm.reset();
    } else {
      console.log('Invalid form data. Please check all fields.');
    }
  }
}
