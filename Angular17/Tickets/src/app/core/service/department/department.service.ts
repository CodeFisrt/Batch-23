import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constants/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }
  getAllDepartment() {
    return this.http.get(APIConstant.API_URL+APIConstant.GET_DEPARTMENT);
  }
  createDepartment(deptObj: any) {
    return this.http.post(APIConstant.API_URL + APIConstant.CREATE_DEPARTMENT, deptObj);
  }
  updateDepartment(deptObj: any) {
    return this.http.put(APIConstant.API_URL + APIConstant.UPDATE_DEPARTMENT, deptObj);
  }
  deleteDepartment(deptId: number) {
    return this.http.delete(APIConstant.API_URL + APIConstant.DELETE_DEPARTMENT + deptId);
  }
  // editDepartment(id:number)  {
  //   return this.http.get(APIConstant.API_URL+APIConstant.GET_EMP_BY_DEPT_ID +id);
  // }
}
