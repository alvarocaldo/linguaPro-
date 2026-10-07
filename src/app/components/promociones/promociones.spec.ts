import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromocionesComponent } from './promociones';

describe('PromocionesComponent', () => {
  let component: PromocionesComponent;
  let fixture: ComponentFixture<PromocionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromocionesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PromocionesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
