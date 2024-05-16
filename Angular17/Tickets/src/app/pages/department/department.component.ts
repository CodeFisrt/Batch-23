import { Component, OnInit } from '@angular/core';
import { Department } from '../../core/models/class/department';
import { IDepartment } from '../../core/models/interface/IDepartment';
import { DepartmentService } from '../../core/service/department/department.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employee } from '../../core/models/class/employee';
import { IEmployee } from '../../core/models/interface/Iemployee';
import { EmployeeService } from '../../core/service/employee/employee.service';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit{
  visibleSaveButton: boolean = false;
  visibleUpdateButton: boolean = false;
  deptObj:Department=new Department();
  deptList:IDepartment[]=[];
  empObj: Employee = new Employee();
  empList:IEmployee[]=[];
  constructor(private deptService:DepartmentService,private empService: EmployeeService){}
  ngOnInit(): void {
    this.getAllDepartment();
    this.getAllEmployee();
  }
  getAllDepartment()
  {
   this.deptService.getAllDepartment().subscribe((res:any)=>{
    this.deptList=res.data;
   })
  }
  getAllEmployee() {
    this.empService.getAllEmployee().subscribe((res: any) => {
      this.empList = res.data;
    })
  }
  createDepartment() {
     this.deptService.createDepartment(this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert("Department Added sucessfully");
        this.getAllDepartment();
        this.resetDepartment();      
      }
      else {
        alert(res.message);
      }
    })
  }
  editDepartment(obj: any) {  
    debugger  
    this.deptObj = obj;    
  }
  updateDepartment() {
    this.deptService.updateDepartment(this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert("Department update sucessfully");
        this.getAllDepartment();
        this.resetDepartment();
        
      } else {
        alert(res.message);
      }
    })
  }
  resetDepartment() {
    this.deptObj = new Department();
  }
  deleteDepartment(deptId: number) {
   
    this.deptService.deleteDepartment(deptId).subscribe((res: any) => {
      if (res.result) {
        alert("Department Delete Successfully");
        this.getAllDepartment();
      } else {
        alert(res.message);
      }
    })
  }
  showModel() {
    const model = document.getElementById("DepartmentForm");
    if (model != null) {
      model.style.display = 'block';
    }
  }
  closeModel() {
    const model = document.getElementById("DepartmentForm");
    if (model != null) {
      model.style.display = 'none';
      this.resetDepartment();
    }
  }
  saveButton() {
    this.visibleUpdateButton = false;
    this.visibleSaveButton = true;
  }
  updateButton() {
    this.visibleUpdateButton = true;
    this.visibleSaveButton = false;
  }
}
