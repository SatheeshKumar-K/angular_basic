import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildB1Component } from './child-b1.component';

describe('ChildB1Component', () => {
  let component: ChildB1Component;
  let fixture: ComponentFixture<ChildB1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildB1Component]
    });
    fixture = TestBed.createComponent(ChildB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
