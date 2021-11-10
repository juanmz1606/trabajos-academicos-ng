import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPorFechaComponent } from './solicitudes-por-fecha.component';

describe('SolicitudesPorFechaComponent', () => {
  let component: SolicitudesPorFechaComponent;
  let fixture: ComponentFixture<SolicitudesPorFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesPorFechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesPorFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
