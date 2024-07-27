import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { DsIconComponent } from './ds-icon.component';
import { IconConfig } from '../../../models/interfaces/components/configs/ds-config/ds-icon.interface';

describe('DsIconComponent', () => {
  let fixture: ComponentFixture<DsIconComponent>;
  let component: DsIconComponent;
  let iconDebugElement: DebugElement;
  let iconElement: HTMLElement;
  let iconImgElement: HTMLImageElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DsIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsIconComponent);
    component = fixture.componentInstance;
  });

  function setupComponent(config: IconConfig) {
    component.config = config;
    fixture.detectChanges(); // Apply changes to the DOM
    iconDebugElement = fixture.debugElement.query(By.css('.icon'));
    iconElement = iconDebugElement?.nativeElement;
    iconImgElement = fixture.debugElement.query(By.css('.icon_img'))?.nativeElement as HTMLImageElement;
  }

  it('should not render if config or config.img.src length is 1 or less', () => {
    // Case where config.img.src is empty
    setupComponent({ img: { src: '', alt: 'Icon Alt Text' } } as IconConfig);
    expect(iconElement).toBeFalsy(); // Ensure element is not rendered

    // Case where config.img.src length is 1
    setupComponent({ img: { src: 'a', alt: 'Icon Alt Text' } } as IconConfig);
    expect(iconElement).toBeFalsy(); // Ensure element is not rendered
  });

  it('should render the icon container if config and config.img.src length is more than 1', () => {
    setupComponent({
      img: { src: 'path/to/icon.png', alt: 'Icon Alt Text' },
      role: 'img'
    } as IconConfig);
    expect(iconElement).toBeTruthy(); // Ensure component is rendered
  });

  it('should render img with correct src and alt attributes', () => {
    setupComponent({
      img: { src: 'path/to/icon.png', alt: 'Icon Alt Text' },
      role: 'img'
    } as IconConfig);
    expect(iconImgElement.src).toContain('path/to/icon.png');
    expect(iconImgElement.alt).toBe('Icon Alt Text');
  });

  it('should set the role attribute correctly when provided', () => {
    setupComponent({
      img: { src: 'path/to/icon.png', alt: 'Icon Alt Text' },
      role: 'img'
    } as IconConfig);
    expect(iconElement.getAttribute('role')).toBe('img');
  });
});
