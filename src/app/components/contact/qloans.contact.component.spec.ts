import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QLoansContactComponent } from './qloans.contact.component';

describe('ContactComponent', () => {
  let component: QLoansContactComponent;
  let fixture: ComponentFixture<QLoansContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QLoansContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QLoansContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
