import { Component } from '@angular/core';
import { Salary } from '../../models/salary.model';
import { SalaryService } from '../../services/salary.service';

@Component({
  selector: 'app-salary-list',
  standalone: false,
  templateUrl: './salary-list.component.html',
  styleUrl: './salary-list.component.scss'
})
export class SalaryListComponent {
  salaries: Salary[] = [];
  employeeId: number = 0;

  constructor(private salaryService: SalaryService) {}

  ngOnInit(): void {}

  loadSalaries(): void {
    if (this.employeeId > 0) {
      this.salaryService.getSalaryByEmployeeId(this.employeeId).subscribe(data => {
        this.salaries = data;
      });
    }
  }
}
