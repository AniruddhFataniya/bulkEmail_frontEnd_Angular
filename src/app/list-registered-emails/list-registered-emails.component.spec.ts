import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegisteredEmailsComponent } from './list-registered-emails.component';

describe('ListRegisteredEmailsComponent', () => {
  let component: ListRegisteredEmailsComponent;
  let fixture: ComponentFixture<ListRegisteredEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRegisteredEmailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRegisteredEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
