import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleAComponent } from './module-a.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildA2Component } from '../child-a2/child-a2.component';
import { ChildA1Component } from '../child-a1/child-a1.component';

@NgModule({
  declarations: [ 
    ReactiveFormsModule],
  imports: [
    CommonModule,ModuleAComponent, ChildA1Component,
        ChildA2Component,FormsModule
  ]
})
export class ModuleAModule { }
