import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { ButtonConfig } from '../../../models/interfaces/components/configs/ds-config/ds-button.interface';
import { IconPosition } from '../../../models/enums/ui-config.enum';
import { ButtonSizes, ButtonStyles } from '../../../models/enums/ds-enumerations/ds-button.enum';

@Component({
  selector: 'app-ds-button',
  templateUrl: './template/ds-button.component.html',
  styleUrls: ['./template/ds-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsButtonComponent implements OnInit {
  @Input('analytics-tracking-id') public analyticsTrackingId: string = '';
  @Input() public config!: ButtonConfig;
  @Input() public isToggleable: boolean = false;
  @Input() public toggleableText?: string;
  @Input() public isloading: boolean = false;
  @Input() public isDisabled: boolean = false;
  @Output() public buttonClicked = new EventEmitter<void>();

  public IconPosition = IconPosition;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.internalInit();
  }

  handleClick(): void {
    if (this.config?.enableLoader) {
      this.isloading = true;
      this.cd.markForCheck();
    }
    this.buttonClicked.emit();
  }

  setFocus(): void {
    const focusTarget = document.getElementById(this.config.id!);
    if (focusTarget) {
      focusTarget.focus();
    }
  }

  private internalInit(): void {
    this.initLayoutDefaultValues();
  }

  private initLayoutDefaultValues(): void {
    if (this.config?.icon && !this.config.icon.position) {
      this.config.icon.position = IconPosition.LEFT;
    }

    if (!this.config?.layout) {
      this.config.layout = {
        size: ButtonSizes.MEDIUM,
        style: ButtonStyles.PRIMARY,
      };
    }
  }
}
