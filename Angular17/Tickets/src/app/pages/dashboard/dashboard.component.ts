import { Component, OnInit } from '@angular/core';
import { SuperAdmin } from '../../core/models/class/superAdmin';
import { DashboardService } from '../../core/service/dashboard/dashboard.service';
import { ISuperAdmin } from '../../core/models/interface/ISuperAdmin';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  superAdminObj: SuperAdmin = new SuperAdmin();
  //superAdminList: ISuperAdmin[] = [];
empDashList:any[]=[];
empId:number=0;
  constructor(private dashService: DashboardService) {

  }
  ngOnInit(): void {
    this.getSuperAdminDashboard();
    this.getEmployeeDashboard();
  }
  getSuperAdminDashboard() {
    
    this.dashService.getSuperAdminDashboard().subscribe((res: any) => {
      this.superAdminObj = res.data;
    })
  }
  getEmployeeDashboard(){
    this.dashService.getEmployeeDashboard(this.empId).subscribe((res:any)=>{
      this.empDashList=res.data;
    })
  }
}
