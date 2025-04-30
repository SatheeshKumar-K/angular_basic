import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FruitVisualizationComponent } from './fruit-visualization.component';

describe('FruitVisualizationComponent', () => {
  let component: FruitVisualizationComponent;
  let fixture: ComponentFixture<FruitVisualizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruitVisualizationComponent]
    });
    fixture = TestBed.createComponent(FruitVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
