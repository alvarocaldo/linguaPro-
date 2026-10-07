import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocentesComponent } from './docentes';

describe('DocentesComponent', () => {
  let component: DocentesComponent;
  let fixture: ComponentFixture<DocentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocentesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DocentesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
