import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salary } from '../models/salary.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {
  private apiUrl = 'http://localhost:8082/api/salary';

  constructor(private http: HttpClient) {}

  getSalaryByEmployeeId(employeeId: number): Observable<Salary[]> {
    return this.http.get<Salary[]>(`${this.apiUrl}/${employeeId}`);
  }

  saveSalary(salary: Salary): Observable<Salary> {
    return this.http.post<Salary>(`${this.apiUrl}/save`, salary);
  }
}