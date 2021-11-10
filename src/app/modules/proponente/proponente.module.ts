import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProponenteRoutingModule } from './proponente-routing.module';
import { CrearProponenteComponent } from './crear-proponente/crear-proponente.component';
import { EditarProponenteComponent } from './editar-proponente/editar-proponente.component';
import { EliminarProponenteComponent } from './eliminar-proponente/eliminar-proponente.component';
import { ListarProponenteComponent } from './listar-proponente/listar-proponente.component';
import { FotografiaProponenteComponent } from './fotografia-proponente/fotografia-proponente.component';


@NgModule({
  declarations: [
    CrearProponenteComponent,
    EditarProponenteComponent,
    EliminarProponenteComponent,
    ListarProponenteComponent,
    FotografiaProponenteComponent
  ],
  imports: [
    CommonModule,
    ProponenteRoutingModule
  ]
})
export class ProponenteModule { }
