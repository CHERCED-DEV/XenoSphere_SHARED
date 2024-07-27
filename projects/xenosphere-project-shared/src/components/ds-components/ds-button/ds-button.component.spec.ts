/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DsButtonComponent } from './ds-button.component';
import { ButtonSizes, ButtonStyles } from '../../../models/enums/ds-enumerations/ds-button.enum';
import { ButtonConfig } from '../../../models/interfaces/components/configs/ds-config/ds-button.interface';
import { IconPosition } from '../../../models/enums/ui-config.enum';
import { DsIconComponent } from '../ds-icon/ds-icon.component';

fdescribe('DsButtonComponent', () => {
  let component: DsButtonComponent;
  let fixture: ComponentFixture<DsButtonComponent>;
  let buttonDebugElement: DebugElement;
  let buttonElement: HTMLElement;
  let buttonLabelElement: HTMLElement;
  let buttonLabelDebugElement: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DsButtonComponent, DsIconComponent]
      }).compileComponents();
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsButtonComponent);
    component = fixture.componentInstance;
    component.config = {
      id: 'testButton',
      label: 'Test Button',
      enableLoader: false,
      loadingText: 'Loading...',
      enableToggable: false,
    } as ButtonConfig;

    fixture.detectChanges();
    buttonDebugElement = fixture.debugElement.query(By.css('.btn'));
    buttonElement = buttonDebugElement.nativeElement;
    buttonLabelDebugElement = fixture.debugElement.query(By.css('.btn_label'));
    buttonLabelElement = buttonLabelDebugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize with default layout values in ngOnInit', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.config.layout.size).toBe(ButtonSizes.MEDIUM);
    expect(component.config.layout.style).toBe(ButtonStyles.PRIMARY);
  });
  fdescribe('should apply correct classes to the button element', () => {
    it('should apply layout classes by default', () => {
      fixture.detectChanges();
      expect(buttonElement.classList).toContain('btn');
      expect(buttonElement.classList).toContain('btn--medium');
      expect(buttonElement.classList).toContain('btn--primary');
      expect(buttonElement.classList).not.toContain('btn--null');
      expect(buttonElement.classList).not.toContain('btn--undefined');
      expect(buttonElement.classList).not.toContain('btn--disabled');
    });
    it('should apply new layout classes when config is updated', () => {
      component.config.layout = {
        style: ButtonStyles.LINK,
        size: ButtonSizes.LARGE
      };
      component.ngOnInit();
      fixture.detectChanges();
      component['cd'].markForCheck();
      fixture.detectChanges();
      expect(buttonElement.classList).toContain('btn');
      expect(buttonElement.classList).toContain('btn--large');
      expect(buttonElement.classList).toContain('btn--link');
      expect(buttonElement.classList).not.toContain('btn--null');
      expect(buttonElement.classList).not.toContain('btn--undefined');
      expect(buttonElement.classList).not.toContain('btn--disabled');
    });
    it('should apply btn--is-toggable class when enableToggable is true', () => {
      component.config.enableToggable = true;
      component.ngOnInit();
      fixture.detectChanges();
      component['cd'].markForCheck();
      fixture.detectChanges();

      expect(buttonElement.classList).toContain('btn--is-toggable');
      expect(buttonElement.classList).not.toContain('btn--loading');
    });
    component
  });
});
