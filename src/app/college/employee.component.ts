import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  constructor(private empService:EmployeeService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getEmployees();
  }

  newEmp:Employee = {name:"", email:"",role:"", phoneNumber:""};
  empList:Employee[] = [];

  createEmployee(){
    this.empService.createEmployee(this.newEmp).subscribe(result=>{
      this.empList.push(result);
    });
    this.newEmp={name:"", email:"", role:"", phoneNumber:""};
  }
  getEmployees(){
    this.empService.getEmployees().subscribe(result=>{
      this.empList = result;
    })
  }

}
