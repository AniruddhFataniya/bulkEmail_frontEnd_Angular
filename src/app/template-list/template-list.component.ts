import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})

export class TemplateListComponent implements OnInit {

  templates!: any;
  templateName: any;
  htmlPart: any;
  templateCount: any;
  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.getTemplatesWithData();
    this.getTemplateCount();
  }

  closeModal() {
    window.location.reload();
  }

  assign(templateName: any, htmlPart: any) {
    this.templateName = templateName;
    this.htmlPart = htmlPart;
  }

  deleteTemplate() {
    this.emailService.deleteTemplate(this.templateName).subscribe(res => {
      this.closeModal();
      this.getTemplatesWithData();
    });
    console.log(this.templateName);

  }

  getTemplatesWithData() {
    this.emailService.getTemplatesWithData().subscribe(res => {
      this.templates = res;
      console.log(this.templates)
    })
  }

  getTemplateCount() {
    this.emailService.getTemplateCount().subscribe(res => {
      this.templateCount = res;
      console.log("remaining templates:", this.templateCount);

    });
  }
}
