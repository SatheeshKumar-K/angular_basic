import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-moduleb',
  templateUrl: './moduleb.component.html',
  styleUrls: ['./moduleb.component.css']
})
export class ModulebComponent {
  numberArray: number[] = [];
  repeatedNumberArray: string[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
    .select('number')
    .pipe(
      map((n) => Array(n).fill(n).join(''))
    )
    .subscribe((result: string) => {
      this.repeatedNumberArray = result.split(''); 
    });
  }  
}
