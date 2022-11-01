import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmailIdentityComponent } from './register-email-identity.component';

describe('RegisterEmailIdentityComponent', () => {
  let component: RegisterEmailIdentityComponent;
  let fixture: ComponentFixture<RegisterEmailIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEmailIdentityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEmailIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
