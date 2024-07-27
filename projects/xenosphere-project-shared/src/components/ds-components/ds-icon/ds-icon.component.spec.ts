/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DsIconComponent } from './ds-icon.component';

describe('DsIconComponent', () => {
  let component: DsIconComponent;
  let fixture: ComponentFixture<DsIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
