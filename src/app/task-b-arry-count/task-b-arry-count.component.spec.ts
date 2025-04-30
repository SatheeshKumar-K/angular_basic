import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskBArryCountComponent } from './task-b-arry-count.component';

describe('TaskBArryCountComponent', () => {
  let component: TaskBArryCountComponent;
  let fixture: ComponentFixture<TaskBArryCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskBArryCountComponent]
    });
    fixture = TestBed.createComponent(TaskBArryCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
