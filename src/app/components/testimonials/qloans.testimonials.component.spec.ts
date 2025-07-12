import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QLoansTestimonialsComponent } from './qloans.testimonials.component';

describe('TestimonialsComponent', () => {
  let component: QLoansTestimonialsComponent;
  let fixture: ComponentFixture<QLoansTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QLoansTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QLoansTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
