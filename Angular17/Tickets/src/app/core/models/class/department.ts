export class Department {
    deptId: 0;
    deptName: string;
    deptHeadEmpId: 0;
    createdDate: Date;
    constructor()
    {
        this.deptId=0;
        this.deptName="";
        this.deptHeadEmpId=0;
        this.createdDate=new Date();
    }
}