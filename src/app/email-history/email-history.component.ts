import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-history',
  templateUrl: './email-history.component.html',
  styleUrls: ['./email-history.component.css']
})
export class EmailHistoryComponent implements OnInit {

  emails!: any;
  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.getEmailHistory();
  }

  getEmailHistory() {
    this.emailService.getEmailHistory().subscribe((res: any) => {
      this.emails = res;
    })
  }

  clearEmailHistory() {
    this.emailService.clearEmailHistory().subscribe(res => {
      this.closeModal();
      this.getEmailHistory();
    });
  }

  closeModal() {
    window.location.reload();
  }

}
