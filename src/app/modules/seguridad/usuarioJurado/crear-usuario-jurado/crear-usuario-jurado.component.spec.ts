import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarioJuradoComponent } from './crear-usuario-jurado.component';

describe('CrearUsuarioJuradoComponent', () => {
  let component: CrearUsuarioJuradoComponent;
  let fixture: ComponentFixture<CrearUsuarioJuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUsuarioJuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUsuarioJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
