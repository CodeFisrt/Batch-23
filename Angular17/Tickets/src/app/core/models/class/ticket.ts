export class Ticket {
    employeeId: number;
    severity: string;
    deptId: number;
    state: string;
    requestDetails: string;

    ticketId: number;
    createdDate: Date;
    expectedEndDate: Date;
    state: string;
    severity: string;
    contactNo: number;
    ticketNo: string;
    deptName: string;
    createdByEmployee: string;
    assignedToEmployee: null;
    completedDate: null;

    constructor()
    {
        this.employeeId=0;
        this.severity="";
        this.deptId=0;
        this.state="";
        this.requestDetails="";

        this.ticketId=0;
        this.createdDate=new Date();
        this.expectedEndDate=new Date();
       


    }
   
}