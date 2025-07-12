import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QLoansHomeComponent } from './qloans.home.component';

describe('LandingComponent', () => {
  let component: QLoansHomeComponent;
  let fixture: ComponentFixture<QLoansHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QLoansHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QLoansHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
