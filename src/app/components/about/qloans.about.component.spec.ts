import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QLoansAboutComponent } from './qloans.about.component';

describe('AboutComponent', () => {
  let component: QLoansAboutComponent;
  let fixture: ComponentFixture<QLoansAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QLoansAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QLoansAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
