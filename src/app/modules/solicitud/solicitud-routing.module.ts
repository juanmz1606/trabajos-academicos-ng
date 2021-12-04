import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './eliminar-solicitud/eliminar-solicitud.component';
import { ListarSolicitudComponent } from './listar-solicitud/listar-solicitud.component';
import { ListarSolicitudesComponent } from './listar-solicitudes/listar-solicitudes.component';

const routes: Routes = [
  {
    path: "crear-solicitud",
    component: CrearSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-solicitud/:id",
    component: EditarSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-solicitud/:id",
    component: EliminarSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-solicitud/:id",
    component: ListarSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-solicitudes",
    component: ListarSolicitudesComponent,
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRoutingModule { }
