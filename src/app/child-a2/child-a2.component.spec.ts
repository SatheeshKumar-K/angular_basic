import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildA2Component } from './child-a2.component';

describe('ChildA2Component', () => {
  let component: ChildA2Component;
  let fixture: ComponentFixture<ChildA2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildA2Component]
    });
    fixture = TestBed.createComponent(ChildA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
