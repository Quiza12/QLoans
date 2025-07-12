import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QLoansServicesComponent } from './qloans.services.component';

describe('ServicesComponent', () => {
  let component: QLoansServicesComponent;
  let fixture: ComponentFixture<QLoansServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QLoansServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QLoansServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
