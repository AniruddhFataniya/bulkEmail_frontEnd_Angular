import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendBulkEmailwithTemplateComponent } from './send-bulk-emailwith-template.component';

describe('SendBulkEmailwithTemplateComponent', () => {
  let component: SendBulkEmailwithTemplateComponent;
  let fixture: ComponentFixture<SendBulkEmailwithTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendBulkEmailwithTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendBulkEmailwithTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
