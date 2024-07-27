import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IconConfig } from '../../../models/interfaces/components/configs/ds-config/ds-icon.interface';

@Component({
  selector: 'ds-icon',
  templateUrl: './template/ds-icon.component.html',
  styleUrls: ['./template/ds-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsIconComponent {
  @Input() config!: IconConfig;
  constructor() { }
}
