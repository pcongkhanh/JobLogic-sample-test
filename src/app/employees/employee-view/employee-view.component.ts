import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../employees.model';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss'],
})
export class EmployeeViewComponent {
  @Input() public employee!: Employee;
  @Input() employeePopularity!: number | string;
  @Output() employeePopularityChange = new EventEmitter<number>();

  public employeePopularityChanged(event: any) {
    this.employeePopularity = event.target.value;
    this.employeePopularityChange.emit(event.target.value);
  }
}
