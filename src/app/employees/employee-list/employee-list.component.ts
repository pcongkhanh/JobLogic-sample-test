import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Employee } from '../employees.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnChanges {
  @Input() employees!: Employee[];
  @Input() selectedEmployee!: Employee;
  @Output() employeeChange = new EventEmitter<Employee>();

  ngOnChanges(changes: SimpleChanges): void {
    if ('employees' in changes) {
      console.log(changes);
      const employees = document.querySelectorAll('.employees__name');
      console.log(employees);
      employees.forEach(employee => {
        employee.classList.add('cc');
      });
    }
  }

  public selectEmployee(employee: Employee) {
    this.employeeChange.emit(employee);
  }
}
