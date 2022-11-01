import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendBulkEmailwithTemplateComponent } from './send-bulk-emailwith-template/send-bulk-emailwith-template.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateListComponent } from './template-list/template-list.component';
import { EmailHistoryComponent } from './email-history/email-history.component';
import { ListRegisteredEmailsComponent } from './list-registered-emails/list-registered-emails.component';
import { RegisterEmailIdentityComponent } from './register-email-identity/register-email-identity.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { SanitizeHtmlPipe } from './sanitize-html-pipe';
import { TemplateEditorComponent } from './template-editor/template-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    SendBulkEmailwithTemplateComponent,
    NavigationComponent,
    HomeComponent,
    TemplateListComponent,
    EmailHistoryComponent,
    ListRegisteredEmailsComponent,
    RegisterEmailIdentityComponent,
    CreateTemplateComponent,
    SanitizeHtmlPipe,
    TemplateEditorComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
