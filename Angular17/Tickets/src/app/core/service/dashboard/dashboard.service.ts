import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constants/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  getSuperAdminDashboard() {
    return this.http.get(APIConstant.API_URL + APIConstant.GET_SUPERADMIN_DASHBOARD);
  }
  getEmployeeDashboard(empId: number) {
    return this.http.get(APIConstant.API_URL + APIConstant.GET_EMP_DASHBORD_BY_EMPID + empId);
  }
  getAdminDashboard(empId: number) {
    return this.http.get(APIConstant.API_URL + APIConstant.GET_ADMIN_DASHBOARD_BY_EMPID + empId);
  }
  getDeptHeadDashboard(empId: number) {
    return this.http.get(APIConstant.API_URL + APIConstant.GET_DEPTHEAD_DASHBOARD_DEPTHEAD_EMPID + empId);
  }
}
