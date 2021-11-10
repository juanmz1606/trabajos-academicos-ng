import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradosPorLineaInvestigacionComponent } from './jurados-por-linea-investigacion.component';

describe('JuradosPorLineaInvestigacionComponent', () => {
  let component: JuradosPorLineaInvestigacionComponent;
  let fixture: ComponentFixture<JuradosPorLineaInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradosPorLineaInvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradosPorLineaInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
