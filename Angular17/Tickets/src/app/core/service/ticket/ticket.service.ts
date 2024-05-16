import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constants/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }
  getAllTicket() {
    return this.http.get(APIConstant.API_URL + APIConstant.GET_ALL_TICKETS);
  }
  getNewTickets() {
    return this.http.get(APIConstant.API_URL + APIConstant.GET_NEW_TICKET);
  }
  getTicketById() {
    return this.http.get(APIConstant.API_URL + APIConstant.GET_TICKET_BYID);
  }
  startTicket(tickObj: any) {
    return this.http.post(APIConstant.API_URL + APIConstant.START_TICKET, tickObj);
  }
  closeTicket(tickObj: any) {
    return this.http.post(APIConstant.API_URL + APIConstant.CLOSE_TICKET, tickObj);
  }
  createNewTicket(tickObj: any) {
    return this.http.post(APIConstant.API_URL + APIConstant.CREATE_NEW_TICKET, tickObj);
  }
  deleteTicket(tickId: number) {
    return this.http.delete(APIConstant.API_URL + APIConstant.DELETE_TICKET + tickId);
  }
  getAssignTicketByEmpId() {
    return this.http.get(APIConstant.API_URL + APIConstant.GET_ASSIGNED_TICKET_EMPID);
  }
  getTicketCraeteByEmpId() {
    return this.http.get(APIConstant.API_URL + APIConstant.GET_CREATE_TICKET_EMPID);
  }
  getAllTicketDeptHead() {
    return this.http.get(APIConstant.API_URL + APIConstant.GET_ALL_TICKET_DEPTHEAD);
  }
}
