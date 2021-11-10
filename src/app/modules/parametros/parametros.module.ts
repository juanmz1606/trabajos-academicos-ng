import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { CrearFacultadComponent } from './facultad/crear-facultad/crear-facultad.component';
import { EditarFacultadComponent } from './facultad/editar-facultad/editar-facultad.component';
import { EliminarFacultadComponent } from './facultad/eliminar-facultad/eliminar-facultad.component';
import { ListarFacultadComponent } from './facultad/listar-facultad/listar-facultad.component';


@NgModule({
  declarations: [
    CrearFacultadComponent,
    EditarFacultadComponent,
    EliminarFacultadComponent,
    ListarFacultadComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
