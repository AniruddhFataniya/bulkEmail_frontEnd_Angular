import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sentCount: any = 0;
  deliveredCount: any = 0;
  openedCount: any = 0;
  clickCount: any = 0;
  bounceCount: any = 0;
  spamMarkCount: any = 0;
  unsubscribeCount: any = 0;
  renderingFailureCount: any = 0;
  constructor(private emailService: EmailService) { }



  ngOnInit(): void {
    this.getSentEmailCount();
    this.getDeliveredEmailCount();
    this.getOpenedEmailCount();
    this.getClickCount();
    this.getBounceCount();
    this.getSpamMarkCount();
    this.getUnsubscribeCount();
    this.getRenderingFailureCount();
  }

  getSentEmailCount() {
    this.emailService.getSentEmailCount().subscribe(res => {
      this.sentCount = res;
      if (this.sentCount == "") {
        this.sentCount = 0;
      }

    })
  }

  getDeliveredEmailCount() {
    this.emailService.getDeliveredEmailCount().subscribe(res => {
      this.deliveredCount = res;
      if (this.deliveredCount == "") {
        this.deliveredCount = 0;
      }

    })
  }

  getClickCount() {
    this.emailService.getClickCount().subscribe(res => {
      this.clickCount = res;
      if (this.clickCount == "") {
        this.clickCount = 0;
      }

    })
  }

  getOpenedEmailCount() {
    this.emailService.getOpenedEmailCount().subscribe(res => {

      this.openedCount = res;
      if (this.openedCount == "") {
        this.openedCount = 0;
      }

    })
  }

  getBounceCount() {
    this.emailService.getBounceCount().subscribe(res => {

      this.bounceCount = res;
      if (this.bounceCount == "") {
        this.bounceCount = 0;
      }

    })
  }

  getSpamMarkCount() {
    this.emailService.getSpamMarkCount().subscribe(res => {

      this.spamMarkCount = res;
      if (this.spamMarkCount == "") {
        this.spamMarkCount = 0;
      }

    })
  }

  getUnsubscribeCount() {
    this.emailService.getUnsubscribeCount().subscribe(res => {

      this.unsubscribeCount = res;
      if (this.unsubscribeCount == "") {
        this.unsubscribeCount = 0;
      }

    })
  }

  getRenderingFailureCount() {
    this.emailService.getRenderingFailureCount().subscribe(res => {

      this.renderingFailureCount = res;
      if (this.renderingFailureCount == "") {
        this.renderingFailureCount = 0;
      }

    })
  }
}
