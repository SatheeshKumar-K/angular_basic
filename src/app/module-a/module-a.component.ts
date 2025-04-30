import { Component } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { setNumber } from '../store/app.actions';
import { AppState } from '../store/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-a',
  templateUrl: './module-a.component.html'
})

export class ModuleAComponent {
 inputNumber: number = 0;
 constructor(private store: Store<AppState>,private route :Router) {}
 submit(): void {
   this.store.dispatch(setNumber({ number: this.inputNumber }));
   this.route.navigate(['/module-b'])
 }
}
