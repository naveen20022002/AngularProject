import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  apiURL = "http://localhost:8080/college"

  createEmployee(employee:Employee):Observable<Employee>{
    return this.httpClient.post<Employee>(this.apiURL, employee);
  }
  getEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.apiURL);
  }
  updateEmployee(id:number,employee:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(this.apiURL+"/"+id, employee);
  }
  deleteEmployee(id:number){
    this.httpClient.delete(this.apiURL);
  }
}
