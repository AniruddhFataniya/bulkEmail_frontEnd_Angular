import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { EmailHistoryComponent } from './email-history/email-history.component';
import { HomeComponent } from './home/home.component';
import { ListRegisteredEmailsComponent } from './list-registered-emails/list-registered-emails.component';
import { RegisterEmailIdentityComponent } from './register-email-identity/register-email-identity.component';
import { SendBulkEmailwithTemplateComponent } from './send-bulk-emailwith-template/send-bulk-emailwith-template.component';
import { TemplateListComponent } from './template-list/template-list.component';

const routes: Routes = [
  {
    path: "send-bulk-email",
    component: SendBulkEmailwithTemplateComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"template-list",
    component: TemplateListComponent
  },
  {
    path:"email-history",
    component:EmailHistoryComponent
  },
  {
    path:"identity-list",
    component:ListRegisteredEmailsComponent
  },
  {
    path:"register-identity",
    component:RegisterEmailIdentityComponent
  },
  {
    path:"create-template",
    component:CreateTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
