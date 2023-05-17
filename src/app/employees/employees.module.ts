import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [EmployeeViewComponent, EmployeeListComponent],
  imports: [CommonModule],
  exports: [EmployeeViewComponent, EmployeeListComponent],
})
export class EmployeesModule {}
