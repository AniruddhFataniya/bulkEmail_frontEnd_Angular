import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BulkEmailWithTemplate } from './bulk-email-with-template';
import { EmailTemplate } from './email-template';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  sendBulkEmail(email: BulkEmailWithTemplate){
    console.log("hello")
    return this.http.post("http://localhost:8080/emails/bulkEmailWithTemplate", email)
  }

  getTemplateList(){
    return this.http.get("http://localhost:8080/emails/listTemplate")
    
  }

  deleteTemplate(templateName:any){
    console.log(templateName)
    
    return this.http.delete("http://localhost:8080/emails/template/"+templateName)
  }

  getEmailHistory(){
    return this.http.get("http://localhost:8080/emails/emailHistory")
  }

  getEmailIdentities(){
    return this.http.get("http://localhost:8080/emails/identities")
  }

  searchIdentity(identity:any){
    return this.http.get("http://localhost:8080/emails/searchIdentity/"+identity)
  }

  createIdentity(identity:any){
    return this.http.post("http://localhost:8080/emails/createIdentity",identity)
  }

  getIdentities(){
    return this.http.get("http://localhost:8080/emails/identities")
  }

  deleteIdentity(identity:any){
    return this.http.delete("http://localhost:8080/emails/deleteIdentity/"+identity)
  }

  createTemplate(emailTemplate:EmailTemplate){
    return this.http.post("http://localhost:8080/emails/template",emailTemplate)
  }

  searchTemplate(templateName:any){
    return this.http.get("http://localhost:8080/emails/searchTemplate/"+templateName)
  }

  getTemplatesWithData(){
    return this.http.get("http://localhost:8080/emails/listTemplatesWithData")
  }

  getSentEmailCount(){
    return this.http.get("http://localhost:8080/metrics/sentEmailCount")
  }

  getDeliveredEmailCount(){
    return this.http.get("http://localhost:8080/metrics/deliveredEmailCount")
  }

  getOpenedEmailCount(){
    return this.http.get("http://localhost:8080/metrics/openedEmailCount")
  }

  getClickCount(){
    return this.http.get("http://localhost:8080/metrics/clickCount")
  }

  getBounceCount(){
    return this.http.get("http://localhost:8080/metrics/bounceCount")
  }

  getSpamMarkCount(){
    return this.http.get("http://localhost:8080/metrics/spamMarkCount")
  }

  getUnsubscribeCount(){
    return this.http.get("http://localhost:8080/metrics/unsubscribeCount")
  }

  getRenderingFailureCount(){
    return this.http.get("http://localhost:8080/metrics/renderingFailureCount")
  }

  clearEmailHistory(){
    return this.http.delete("http://localhost:8080/emails/clearEmailHistory")
  }

  getTemplateCount(){
    return this.http.get("http://localhost:8080/emails/templateCount")
  }



  
}
