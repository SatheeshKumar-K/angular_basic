import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitVisualizationComponent } from './fruit-visualization/fruit-visualization.component';
import { ModuleAComponent } from './module-a/module-a.component';
import { ChildA1Component } from './child-a1/child-a1.component';
import { ChildA2Component } from './child-a2/child-a2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ChildB1Component } from './child-b1/child-b1.component';
import { ChildB2Component } from './child-b2/child-b2.component';
import { ModulebComponent } from './moduleb/moduleb.component';
import {  reducers } from './store/app.reducer';
import { TaskBArryCountComponent } from './task-b-arry-count/task-b-arry-count.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitVisualizationComponent,
    ModuleAComponent,
    ModulebComponent,
    ChildA1Component,
    ChildA2Component,
    ChildB1Component,
    ChildB2Component,
    TaskBArryCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,   StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
