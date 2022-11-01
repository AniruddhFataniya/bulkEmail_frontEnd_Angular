import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { EmailService } from '../email.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailTemplate } from '../email-template';
import { TemplateEditorComponent } from '../template-editor/template-editor.component';
import { asapScheduler } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})


export class CreateTemplateComponent implements OnInit {

  templateForm!: FormGroup;
  emailTemplate: EmailTemplate = new EmailTemplate();
  submitted = false;
  showAlert = false;
  templateAvailable: any;
  err: any = false;
  templateFinalized = false;
  remainingTemplates: any;
  templateCountErr: any = false;
  htmlData: any;

  @ViewChild(TemplateEditorComponent)
  private templateEditor: TemplateEditorComponent;
  constructor(private router: Router, private emailService: EmailService, private formBuilder: FormBuilder, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.templateForm = this.formBuilder.group({
      templateName: ['', [Validators.required,
      Validators.pattern("^[a-zA-Z0-9_-]*$")
      ]],
      subjectPart: ['', Validators.required],
      textPart: ['', Validators.required]
    })
    this.getTemplateCount();

  }

  saveDesign() {
    this.templateEditor.saveDesign((design) => console.log('saveDesign', design));
  }


  exportHtml() {
    debugger;
    this.templateEditor.exportHtml((data: any) => {

      this.htmlData = data['html'];
    });
    return this.htmlData;
  }


  createTemplate(templateForm: FormGroup) {

    this.emailTemplate.templateName = this.templateForm.controls.templateName.value;
    this.emailTemplate.subjectPart = this.templateForm.controls.subjectPart.value;
    this.emailTemplate.textPart = this.templateForm.controls.textPart.value;
    this.emailTemplate.htmlPart = this.exportHtml();

    this.submitted = true;
    if (this.templateForm.invalid) {
      return
    }

    // if user does not add any element to the template, creating default template element
    if (this.emailTemplate.htmlPart == undefined || this.emailTemplate.htmlPart == null) {
      this.emailTemplate.htmlPart = "<html><body>There is no content in the template</body></html>";
    }
    this.emailService.createTemplate(this.emailTemplate).subscribe((res: any) => {
      this.showAlert = true;
      this.templateFinalized = false;
      this.router.navigate(['/template-list'])
      this.clearForm();
    });
  }

  searchTemplate() {
    this.emailService.searchTemplate(this.templateForm.controls.templateName.value).subscribe(res => {
      this.templateAvailable = res;
      this.err = res;
    });
  }

  clearForm() {
    this.templateForm.reset();
    this.submitted = false;
  }

  finalizeTemplate() {
    this.templateForm.controls.htmlPart = this.exportHtml();
    this.templateFinalized = true;
  }

  getTemplateCount() {
    this.emailService.getTemplateCount().subscribe(res => {
      this.remainingTemplates = res;
      if (this.remainingTemplates < 1) {
        this.templateCountErr = true;
      }
    });
  }
}
