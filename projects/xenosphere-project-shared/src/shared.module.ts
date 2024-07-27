import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemComponents } from './components/ds-components';
import { ComplexComponents } from './components/cx-components';

@NgModule({
  declarations: [
    ...DesignSystemComponents,
    ...ComplexComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...DesignSystemComponents,
    ...ComplexComponents
  ]
})
export class sharedModule { }
