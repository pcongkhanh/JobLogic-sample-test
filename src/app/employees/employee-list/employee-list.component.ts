import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../employees.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent {
  @Input() employees!: Employee[];
  @Input() selectedEmployee!: Employee;
  @Output() employeeChange = new EventEmitter<Employee>();

  public selectEmployee(employee: Employee) {
    this.employeeChange.emit(employee);
  }
}
