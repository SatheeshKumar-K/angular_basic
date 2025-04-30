import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildB2Component } from '../child-b2/child-b2.component';
import { ChildB1Component } from '../child-b1/child-b1.component';
import { ModulebComponent } from '../moduleb/moduleb.component';

@NgModule({
  declarations: [ChildB1Component,
      ChildB2Component,ModulebComponent],
  imports: [
    CommonModule
  ]
})
export class ModuleBModule { }
