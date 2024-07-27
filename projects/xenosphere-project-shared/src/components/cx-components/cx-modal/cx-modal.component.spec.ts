/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CxModalComponent } from './cx-modal.component';

describe('CxModalComponent', () => {
  let component: CxModalComponent;
  let fixture: ComponentFixture<CxModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
