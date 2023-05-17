import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Employee } from './employees/employees.model';
import { EmployeeService } from './employees/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public employees!: Employee[];

  public selectedEmployee!: Employee;
  public employeePopularity!: number;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
      this.selectedEmployee = this.employees[0];
      this.employeePopularity = this.selectedEmployee.popularity;
    });
  }

  public employeeChange(employee: Employee) {
    this.selectedEmployee = employee;
    this.employeePopularity = this.selectedEmployee.popularity;
  }

  public employeePopularityChange(popularity: number) {
    this.selectedEmployee.popularity = popularity;
    this.employeeService.editEmployee(this.selectedEmployee);
  }
}
