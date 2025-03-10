import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { SalaryListComponent } from './components/salary-list/salary-list.component';
import { SalaryFormComponent } from './components/salary-form/salary-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add-employees', component: EmployeeFormComponent },
  { path: 'salaries', component: SalaryListComponent },
  { path: 'add-salary', component: SalaryFormComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
