import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdiomasCursosComponent } from './idiomas-cursos';

describe('IdiomasCursosComponent', () => {
  let component: IdiomasCursosComponent;
  let fixture: ComponentFixture<IdiomasCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdiomasCursosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IdiomasCursosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
