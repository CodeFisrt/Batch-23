import { Component, OnInit } from '@angular/core';
import { Employee } from '../../core/models/class/employee';
import { IEmployee } from '../../core/models/interface/Iemployee';
import { IDepartment } from '../../core/models/interface/IDepartment';
import { EmployeeService } from '../../core/service/employee/employee.service';
import { DepartmentService } from '../../core/service/department/department.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
  visibleSaveButton: boolean = false;
  visibleUpdateButton: boolean = false;
  empObj: Employee = new Employee();
  empList: IEmployee[] = [];
  deptList: IDepartment[] = [];
  roleList:any[]=[];
  selectedGender:string='';
  constructor(private empService: EmployeeService, private deptService: DepartmentService) {  }
  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllDepartment();
    this.getAllRole();
  }
  getAllEmployee() {
    this.empService.getAllEmployee().subscribe((res: any) => {
      this.empList = res.data;
    })
  }
  createEmployee() {
    this.empService.createEmployee(this.empObj).subscribe((res: any) => {
      if (res.result) {
        alert("Employee Added sucessfully");
        this.getAllEmployee();
        this.resetEmployee();
        this.closeModel();
      }
      else {
        alert(res.message);
      }
    })
  }
  editEmployee(empId: number) {

    this.empService.editEmployee(empId).subscribe((res: any) => {
      this.empObj = res.data;
    
    })
  }
  updateEmployee() {
    this.empService.updateEmployee(this.empObj).subscribe((res: any) => {
      if (res.result) {
        alert("Employee update sucessfully");
        this.getAllEmployee();
        this.resetEmployee();
        this.closeModel();
      } else {
        alert(res.message);
      }
    })
  }
  resetEmployee() {
    this.empObj = new Employee();
  }
  deleteEmployee(empId: number) {
    debugger
    this.empService.deleteEmployee(empId).subscribe((res: any) => {
      if (res.result) {
        alert("Employee Delete Successfully");
        this.getAllEmployee();
      } else {
        alert(res.message);
      }
    })
  }
  showModel() {
    const model = document.getElementById("employeeForm");
    if (model != null) {
      model.style.display = 'block';
    }
  }
  closeModel() {
    const model = document.getElementById("employeeForm");
    if (model != null) {
      model.style.display = 'none';
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
  getAllDepartment() {
    this.deptService.getAllDepartment().subscribe((res: any) => {
      this.deptList = res.data;
    })
  }
  getAllRole() {
    this.empService.getAllRoles().subscribe((res: any) => {
      this.roleList = res.data;
    })
  }
}
