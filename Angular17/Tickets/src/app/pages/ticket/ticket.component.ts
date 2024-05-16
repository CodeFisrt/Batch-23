import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../core/service/ticket/ticket.service';
import { ITicket } from '../../core/models/interface/ITicket';
import { Ticket } from '../../core/models/class/ticket';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit {
  tickList: ITicket[] = [];
  tickObj: Ticket = new Ticket();
  constructor(private ticketService: TicketService) { }
  ngOnInit(): void {
    this.getAllTicket();
  }
  getAllTicket() {
    this.ticketService.getAllTicket().subscribe((res: any) => {
      this.tickList = res.data;
    })
  }
  getNewTickets()
  {
    this.ticketService.getNewTickets().subscribe((res:any)=>{
    /////////////  
    })
  }
  getTicketById(){
    this.ticketService.getTicketById().subscribe((res:any)=>{
      this.tickList=res.data;
    })
  }
  startTicket() {
    this.ticketService.startTicket(this.tickObj).subscribe((res: any) => {
      if (res.result) {
        alert("Ticket Start sucessfully");
      }
      else {
        alert(res.message);
      }
    })
  }
  closeTicket() {
    this.ticketService.closeTicket(this.tickObj).subscribe((res: any) => {
      if (res.result) {
        alert("Ticket Closed ");
      }
      else {
        alert(res.message);
      }
    })
  }
  createNewTicket() {
    this.ticketService.createNewTicket(this.tickObj).subscribe((res: any) => {
      if (res.result) {
        alert("New Ticket Create sucessfully");
      }
      else {
        alert(res.message);
      }
    })
  }
  deleteTicket(ticketId: number) {
    this.ticketService.deleteTicket(ticketId).subscribe((res: any) => {
      if (res.result) {
        alert("Ticket Deleted ");
      }
      else {
        alert(res.message);
      }
    })
  }
  
}
