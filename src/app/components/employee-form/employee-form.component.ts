import { Component } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  standalone: false,
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent {
  employee: Employee = {
    name: '',
    department: '',
    email: ''
  };

  constructor(private employeeService: EmployeeService) {}

  addEmployee(): void {
    if (!this.employee.name || !this.employee.email) {
      alert('Name and Email are required');
      return;
    }

    this.employeeService.createEmployee(this.employee).subscribe(() => {
      alert('Employee added successfully');
      this.resetForm();
    });
  }

  resetForm(): void {
    this.employee = { name: '', department: '', email: '' };
  }
}
