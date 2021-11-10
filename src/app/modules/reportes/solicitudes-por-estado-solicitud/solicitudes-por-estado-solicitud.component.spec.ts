import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPorEstadoSolicitudComponent } from './solicitudes-por-estado-solicitud.component';

describe('SolicitudesPorEstadoSolicitudComponent', () => {
  let component: SolicitudesPorEstadoSolicitudComponent;
  let fixture: ComponentFixture<SolicitudesPorEstadoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesPorEstadoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesPorEstadoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
