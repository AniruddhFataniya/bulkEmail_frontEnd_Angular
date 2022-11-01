import { Component, OnInit } from '@angular/core';
import { EmailHistoryComponent } from '../email-history/email-history.component';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-list-registered-emails',
  templateUrl: './list-registered-emails.component.html',
  styleUrls: ['./list-registered-emails.component.css']
})
export class ListRegisteredEmailsComponent implements OnInit {

  identities!: any;
  identity: any;
  constructor(private emailService: EmailService) { }

  ngOnInit(): void {

    this.getIdentities()
  }

  getIdentities() {
    this.emailService.getIdentities().subscribe(res => {
      this.identities = res;
    })
  }

  deleteIdentity() {
    this.emailService.deleteIdentity(this.identity).subscribe(res => {
      this.closeModal();
      this.getIdentities();
    });

  }

  assign(identity: any) {
    this.identity = identity;
  }

  closeModal() {
    window.location.reload();
  }

}
