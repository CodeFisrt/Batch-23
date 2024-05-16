import { Injectable } from '@angular/core';
import { APIConstant } from '../../constants/APIConstant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  getAllEmployee() {
    return this.http.get(APIConstant.API_URL + APIConstant.GET_EMPLOYEE);
  }
  createEmployee(empObj: any) {
    return this.http.post(APIConstant.API_URL + APIConstant.CREATE_EMPLOYEE, empObj);
  }
  editEmployee(empId: number) {
    return this.http.get(APIConstant.API_URL + APIConstant.GET_EMP_BY_ID + empId);
  }
  updateEmployee(empObj: any) {
    return this.http.put(APIConstant.API_URL + APIConstant.UPDATE_EMPLOYEE, empObj);
  }
  deleteEmployee(empId: number) {
    return this.http.delete(APIConstant.API_URL + APIConstant.DELETE_EMPLOYEE + empId);
  }
  getAllRoles() {
    return this.http.get(APIConstant.API_URL + APIConstant.GET_ALL_ROLES);
  }
}
