import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitacionEvaluarRoutingModule } from './invitacion-evaluar-routing.module';
import { CrearInvitacionEvaluarComponent } from './crear-invitacion-evaluar/crear-invitacion-evaluar.component';
import { EditarInvitacionEvaluarComponent } from './editar-invitacion-evaluar/editar-invitacion-evaluar.component';
import { EliminarInvitacionEvaluarComponent } from './eliminar-invitacion-evaluar/eliminar-invitacion-evaluar.component';
import { ListarInvitacionEvaluarComponent } from './listar-invitacion-evaluar/listar-invitacion-evaluar.component';


@NgModule({
  declarations: [
    CrearInvitacionEvaluarComponent,
    EditarInvitacionEvaluarComponent,
    EliminarInvitacionEvaluarComponent,
    ListarInvitacionEvaluarComponent
  ],
  imports: [
    CommonModule,
    InvitacionEvaluarRoutingModule
  ]
})
export class InvitacionEvaluarModule { }
