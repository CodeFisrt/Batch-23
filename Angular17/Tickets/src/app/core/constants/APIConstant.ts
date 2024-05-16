export const APIConstant = {
    API_URL: "https://freeapi.gerasim.in/api/Tickets/",

    LOGIN:"Login",

    CREATE_EMPLOYEE: "CreateEmployee",
    UPDATE_EMPLOYEE: "UpdateEmployee",
    DELETE_EMPLOYEE: "DeleteEmployee?id=",
    GET_EMPLOYEE: "GetEmployees",

    GET_EMP_BY_ID: "GetEmployeeById?id=",
    GET_EMP_BY_DEPT_ID: "GetEmployeesByDeptId?id=",

    GET_ALL_ROLES: "GetAllRoles",
    GET_SUPERADMIN_DASHBOARD: "GetSuperAdminDashboard",
    GET_EMP_DASHBORD_BY_EMPID: "getEmployeeDashByEmpId?empId=",
    GET_ADMIN_DASHBOARD_BY_EMPID: "/getAdminEmployeeDashByEmpId?empId=",
    GET_DEPTHEAD_DASHBOARD_DEPTHEAD_EMPID: "GetDeptHeadDashboardByDeptHead?deptHeadEmpId=",

    GET_DEPARTMENT:"GetDepartments",
    CREATE_DEPARTMENT:"CreateDepartment",
    UPDATE_DEPARTMENT:"UpdateDepartment",
    DELETE_DEPARTMENT:"DeleteDepartment?id=",

    CREATE_NEW_TICKET:"CreateNewTicket",
    DELETE_TICKET:"DeleteTicket?id=",
    START_TICKET:"startTicket?id=",
    CLOSE_TICKET:"closeTicket?id=",
    
    GET_ALL_TICKETS:"GetAllTickets",
    GET_NEW_TICKET:"getNewTickets?deptHeadEmpId=",
    GET_TICKET_BYID:"GetTicketById?ticketId=",
    GET_ASSIGNED_TICKET_EMPID:"GetAssignedTicketsByEmpId?empId=",
    GET_CREATE_TICKET_EMPID:"GetTicketsCreatedByEmpId?empId=",
    GET_ALL_TICKET_DEPTHEAD:"GetAllTicketsByDeptHead?deptHeadEmpId=",
}