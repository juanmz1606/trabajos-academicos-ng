import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { CrearInvitacionEvaluarComponent } from './crear-invitacion-evaluar/crear-invitacion-evaluar.component';
import { EditarInvitacionEvaluarComponent } from './editar-invitacion-evaluar/editar-invitacion-evaluar.component';
import { EliminarInvitacionEvaluarComponent } from './eliminar-invitacion-evaluar/eliminar-invitacion-evaluar.component';
import { InfoInvitacionEvaluarComponent } from './info-invitacion-evaluar/info-invitacion-evaluar.component';
import { ListarInvitacionEvaluarComponent } from './listar-invitacion-evaluar/listar-invitacion-evaluar.component';

const routes: Routes = [
  {
    path: "crear-invitacion-evaluar/:id",
    component: CrearInvitacionEvaluarComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-invitacion-evaluar/:id",
    component: EditarInvitacionEvaluarComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-invitacion-evaluar/:id",
    component: EliminarInvitacionEvaluarComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-invitacion-evaluar/:id",
    component: ListarInvitacionEvaluarComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "info-invitacion-evaluar/:id",
    component: InfoInvitacionEvaluarComponent,
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitacionEvaluarRoutingModule { }
