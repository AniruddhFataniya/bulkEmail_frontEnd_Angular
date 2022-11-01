import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-email-identity',
  templateUrl: './register-email-identity.component.html',
  styleUrls: ['./register-email-identity.component.css']
})
export class RegisterEmailIdentityComponent implements OnInit {

  eform!: FormGroup;
  identity: any;
  validIdentity: any;
  err: any = false;
  submitted = false;
  showAlert = false;

  constructor(private emailService: EmailService, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.eform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  createIdentity() {
    this.submitted = true;
    if (this.eform.invalid) {
      return
    }

    this.emailService.createIdentity(this.eform.controls.email.value).subscribe(res => {
      this.showAlert = true;
    });
  }

  searchIdentity() {
    this.emailService.searchIdentity(this.eform.controls.email.value).subscribe(res => {
      this.validIdentity = res;
      this.err = res;
      console.log("identity", this.validIdentity)
    });
  }
}
