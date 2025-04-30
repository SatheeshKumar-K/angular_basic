import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildB2Component } from './child-b2.component';

describe('ChildB2Component', () => {
  let component: ChildB2Component;
  let fixture: ComponentFixture<ChildB2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildB2Component]
    });
    fixture = TestBed.createComponent(ChildB2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
