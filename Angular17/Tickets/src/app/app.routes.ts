import { Routes } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DepartmentComponent } from './pages/department/department.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/Layout/layout.component';
import { Ticket } from './core/models/class/ticket';
import { TicketComponent } from './pages/ticket/ticket.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'employee', component: EmployeeComponent },
            { path: 'department', component: DepartmentComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'ticket', component: TicketComponent }
        ]
    }


];
