import { Component } from '@angular/core';

@Component({
  selector: 'app-task-b-arry-count',
  templateUrl: './task-b-arry-count.component.html',
  styleUrls: ['./task-b-arry-count.component.css']
})
export class TaskBArryCountComponent {
   array = ["hello Deepu", "hello", "Ramya", "Hai kiran", "hello Samyu", "sweet", "car", "rushi says hello", "helloart"];
  helloCount = 0
  ngOnInit(){
     this.helloCount = this.array.filter(item => /\bhello\b/.test(item)).length;
  
    console.log(`Count of items containing "hello": ${this.helloCount}`);
  }
}
