import { Component } from '@angular/core';
import { Salary } from '../../models/salary.model';
import { SalaryService } from '../../services/salary.service';

@Component({
  selector: 'app-salary-form',
  standalone: false,
  templateUrl: './salary-form.component.html',
  styleUrl: './salary-form.component.scss'
})
export class SalaryFormComponent {
  salary: Salary = {
    employeeId: 0,
    amount: 0,
    payDate: new Date()
  };
  message: string = '';

  constructor(private salaryService: SalaryService) {}

  submitSalary(): void {
    if (this.salary.employeeId && this.salary.amount) {
      this.salaryService.saveSalary(this.salary).subscribe(() => {
        this.message = 'Salary saved successfully!';
        this.salary = { employeeId: 0, amount: 0, payDate: new Date() };
      });
    } else {
      this.message = 'Please fill all fields correctly.';
    }
  }
}
