import { Component, OnInit } from '@angular/core';
import { BulkEmailWithTemplate } from '../bulk-email-with-template';
import { EmailService } from '../email.service';
import { FormBuilder, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

function validateEmails(emails: string) {
  return (emails.split(',')
    .map(email => Validators.email(<AbstractControl>{ value: email }))
    .find(_ => _ !== null) === undefined);
}

function emailsValidator(control: AbstractControl): ValidationErrors | null {
  if (control.value === '' || !control.value || validateEmails(control.value)) {
    return null
  }
  return { emails: true };
}

@Component({
  selector: 'app-send-bulk-emailwith-template',
  templateUrl: './send-bulk-emailwith-template.component.html',
  styleUrls: ['./send-bulk-emailwith-template.component.css']
})
export class SendBulkEmailwithTemplateComponent implements OnInit {

  bulkEmail: BulkEmailWithTemplate = new BulkEmailWithTemplate();
  emailForm !: FormGroup;
  submitted = false;
  showAlert = false;
  templateNames: any;
  templateName: String = "";
  validIdentity: any;
  err: any = false;
  emailCount: number = 0;
  emailCountErr: any = false;
  valid: any = true;



  constructor(private emailService: EmailService, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      sender: ['', [Validators.required, Validators.email]],
      toAddresses: ['', [Validators.required]],
      templateName: ['', Validators.required],
      receiverName: []
    });

    this.getTemplateList();
  }

  searchIdentity() {
    this.emailService.searchIdentity(this.emailForm.controls.sender.value).subscribe(res => {
      this.validIdentity = res;
      this.err = !res;
      console.log("identity", this.validIdentity)
    });
  }

  sendBulkEmail(emailForm: FormGroup) {

    this.bulkEmail.sender = this.emailForm.value.sender;
    this.bulkEmail.toAddresses = this.emailForm.value.toAddresses;
    this.bulkEmail.templateName = this.emailForm.value.templateName;
    this.bulkEmail.name = this.emailForm.value.name;
    this.emailCount = this.count(this.emailForm.controls.toAddresses.value)

    this.submitted = true;
    if (this.emailForm.invalid) {
      return
    }

    this.emailService.sendBulkEmail(this.bulkEmail).subscribe(res => {
      console.log("emails:" + this.emailCount)
      console.log("bulk email:" + this.count(this.emailForm.controls.toAddresses.value))
      this.showAlert = true;
      this.emailCount = 0
      this.clearForm();
    }
    );

  }

  clearForm() {
    this.emailForm.reset();
    this.submitted = false;
  }

  count(data: any) {
    var cnt = data.split(',').length;
    if (this.emailForm.controls.toAddresses.value == "") {
      return 0;
    }
    else {
      return cnt;
    }

  }

  getTemplateList() {
    this.emailService.getTemplateList().subscribe(data => {
      this.templateNames = data;
    });
  }

  assignCount(data: any) {
    this.emailCount = this.count(data);
    console.log(this.emailCountErr)
    if (this.emailCount > 50) {
      this.emailCountErr = true;
    }
    else
      this.emailCountErr = false;
  }

  assignValid(data: any) {
    this.valid = validateEmails(data);
  }

}
