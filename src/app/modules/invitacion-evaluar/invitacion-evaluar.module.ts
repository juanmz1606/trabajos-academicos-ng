import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitacionEvaluarRoutingModule } from './invitacion-evaluar-routing.module';
import { CrearInvitacionEvaluarComponent } from './crear-invitacion-evaluar/crear-invitacion-evaluar.component';
import { EditarInvitacionEvaluarComponent } from './editar-invitacion-evaluar/editar-invitacion-evaluar.component';
import { EliminarInvitacionEvaluarComponent } from './eliminar-invitacion-evaluar/eliminar-invitacion-evaluar.component';
import { ListarInvitacionEvaluarComponent } from './listar-invitacion-evaluar/listar-invitacion-evaluar.component';
import { InfoInvitacionEvaluarComponent } from './info-invitacion-evaluar/info-invitacion-evaluar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    CrearInvitacionEvaluarComponent,
    EditarInvitacionEvaluarComponent,
    EliminarInvitacionEvaluarComponent,
    ListarInvitacionEvaluarComponent,
    InfoInvitacionEvaluarComponent
  ],
  imports: [
    CommonModule,
    InvitacionEvaluarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class InvitacionEvaluarModule { }
