import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApikeyPopupComponent } from './apikey-popup.component';

describe('ApikeyPopupComponent', () => {
  let component: ApikeyPopupComponent;
  let fixture: ComponentFixture<ApikeyPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApikeyPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApikeyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
