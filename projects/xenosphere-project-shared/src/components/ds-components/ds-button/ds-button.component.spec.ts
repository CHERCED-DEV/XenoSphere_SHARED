/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonSizes, ButtonStyles } from '../../../models/enums/ds-enumerations/ds-button.enum';
import { IconPosition } from '../../../models/enums/ui-config.enum';
import { ButtonConfig } from '../../../models/interfaces/components/configs/ds-config/ds-button.interface';
import { DsIconComponent } from '../ds-icon/ds-icon.component';
import { DsButtonComponent } from './ds-button.component';

describe('DsButtonComponent', () => {
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
    })
  );

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

    loadChanges();
    buttonDebugElement = fixture.debugElement.query(By.css('.btn'));
    buttonElement = buttonDebugElement.nativeElement;
    buttonLabelDebugElement = fixture.debugElement.query(By.css('.btn_label'));
    buttonLabelElement = buttonLabelDebugElement.nativeElement;
  });

  function loadChanges() {
    fixture.detectChanges();
    component['cd'].markForCheck();
    fixture.detectChanges();
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default layout values in ngOnInit', () => {
    component.ngOnInit();
    loadChanges();
    expect(component.config.layout.size).toBe(ButtonSizes.MEDIUM);
    expect(component.config.layout.style).toBe(ButtonStyles.PRIMARY);
  });

  describe('should apply correct classes to the button element', () => {
    it('should apply layout classes by default', () => {
      loadChanges();
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
      loadChanges();
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
      loadChanges();
      expect(buttonElement.classList).toContain('btn--is-toggable');
      expect(buttonElement.classList).not.toContain('btn--loading');
    });

    it('should apply btn--loading class when enableLoader is true', () => {
      component.config.enableLoader = true;
      component.ngOnInit();
      loadChanges();
      component.isloading = true;
      loadChanges();
      expect(buttonElement.classList).toContain('btn--loading');
      expect(buttonElement.classList).not.toContain('btn--is-toggable');
    });

    it('should apply disabled class when isDisabled is true', () => {
      component.isDisabled = true;
      loadChanges();
      expect(buttonElement.classList).toContain('btn--disabled');
    });
  });

  describe('ds-button should render icon', () => {
    beforeEach(() => {
      component.config.icon = {
        settings: {
          img: {
            src: 'img',
            alt: 'icon'
          },
          role: 'icon'
        }
      };
      loadChanges();
    });

    function getIconElement() {
      component.ngOnInit();
      loadChanges();
      const iconComponent = fixture.debugElement.query(By.directive(DsIconComponent));
      expect(iconComponent).toBeTruthy();
      return iconComponent ? iconComponent.nativeElement : null;
    }

    it('should have icon on the left by default if no position is defined', () => {
      component.config.icon!.position = undefined;
      const iconElement = getIconElement();
      if (iconElement) {
        expect(iconElement.previousElementSibling).toBeNull();
      }
    });

    it('ds-button should have icon on the left', () => {
      component.config.icon!.position = IconPosition.LEFT;
      const iconElement = getIconElement();
      if (iconElement) {
        expect(iconElement.previousElementSibling).toBeNull();
      }
    });

    it('ds-button should have icon on the right', () => {
      component.config.icon!.position = IconPosition.RIGHT;
      const iconElement = getIconElement();
      if (iconElement) {
        expect(iconElement.previousElementSibling).toBe(buttonLabelElement);
      }
    });

    it('should not render icon if icon configuration is not provided', () => {
      component.config.icon = undefined;
      loadChanges();
      const iconComponent = fixture.debugElement.query(By.directive(DsIconComponent));
      expect(iconComponent).toBeFalsy();
    });
  });

  describe('btn_label behavior should be', () => {
    it('should display default label behavior', () => {
      component.ngOnInit();
      component.config.enableLoader = false;
      component.config.enableToggable = false;
      loadChanges();
      expect(buttonLabelElement.textContent!.trim()).toBe(component.config.label);
    });

    it('should display loading text when enableLoader is true and enableToggable is false', () => {
      component.ngOnInit();
      component.config.enableLoader = true;
      component.config.enableToggable = false;
      component.isloading = true;
      loadChanges();
      expect(buttonLabelElement.textContent!.trim()).toBe(component.config.loadingText);
    });

    it('should display toggled text when enableToggable is true and enableLoader is false', () => {
      component.ngOnInit();
      component.config.enableLoader = false;
      component.config.enableToggable = true;
      component.isToggleable = true;
      component.toggleableText = 'Toggled Text';
      loadChanges();
      expect(buttonLabelElement.textContent!.trim()).toBe(component.toggleableText);
    });

    it('should display default label when enableToggable is true but not toggled', () => {
      component.ngOnInit();
      component.config.enableLoader = false;
      component.config.enableToggable = true;
      component.isToggleable = false;
      loadChanges();
      expect(buttonLabelElement.textContent!.trim()).toBe(component.config.label);
    });
  })
});
