import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { CrearComiteComponent } from './comite/crear-comite/crear-comite.component';
import { EditarComiteComponent } from './comite/editar-comite/editar-comite.component';
import { EliminarComiteComponent } from './comite/eliminar-comite/eliminar-comite.component';
import { ListarComiteComponent } from './comite/listar-comite/listar-comite.component';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './departamento/eliminar-departamento/eliminar-departamento.component';
import { ListarDepartamentoComponent } from './departamento/listar-departamento/listar-departamento.component';
import { CrearEstadoSolicitudComponent } from './estado-solicitud/crear-estado-solicitud/crear-estado-solicitud.component';
import { EditarEstadoSolicitudComponent } from './estado-solicitud/editar-estado-solicitud/editar-estado-solicitud.component';
import { EliminarEstadoSolicitudComponent } from './estado-solicitud/eliminar-estado-solicitud/eliminar-estado-solicitud.component';
import { ListarEstadoSolicitudComponent } from './estado-solicitud/listar-estado-solicitud/listar-estado-solicitud.component';
import { CrearFacultadComponent } from './facultad/crear-facultad/crear-facultad.component';
import { EditarFacultadComponent } from './facultad/editar-facultad/editar-facultad.component';
import { EliminarFacultadComponent } from './facultad/eliminar-facultad/eliminar-facultad.component';
import { ListarFacultadComponent } from './facultad/listar-facultad/listar-facultad.component';
import { CrearJuradoComponent } from './jurado/crear-jurado/crear-jurado.component';
import { EditarJuradoComponent } from './jurado/editar-jurado/editar-jurado.component';
import { EliminarJuradoComponent } from './jurado/eliminar-jurado/eliminar-jurado.component';
import { ListarJuradoComponent } from './jurado/listar-jurado/listar-jurado.component';
import { CrearLineaInvestigacionComponent } from './linea-investigacion/crear-linea-investigacion/crear-linea-investigacion.component';
import { EditarLineaInvestigacionComponent } from './linea-investigacion/editar-linea-investigacion/editar-linea-investigacion.component';
import { EliminarLineaInvestigacionComponent } from './linea-investigacion/eliminar-linea-investigacion/eliminar-linea-investigacion.component';
import { ListarLineaInvestigacionComponent } from './linea-investigacion/listar-linea-investigacion/listar-linea-investigacion.component';
import { CrearModalidadComponent } from './modalidad/crear-modalidad/crear-modalidad.component';
import { EditarModalidadComponent } from './modalidad/editar-modalidad/editar-modalidad.component';
import { EliminarModalidadComponent } from './modalidad/eliminar-modalidad/eliminar-modalidad.component';
import { ListarModalidadComponent } from './modalidad/listar-modalidad/listar-modalidad.component';
import { CrearResultadoEvaluacionComponent } from './resultado-evaluacion/crear-resultado-evaluacion/crear-resultado-evaluacion.component';
import { EditarResultadoEvaluacionComponent } from './resultado-evaluacion/editar-resultado-evaluacion/editar-resultado-evaluacion.component';
import { EliminarResultadoEvaluacionComponent } from './resultado-evaluacion/eliminar-resultado-evaluacion/eliminar-resultado-evaluacion.component';
import { ListarResultadoEvaluacionComponent } from './resultado-evaluacion/listar-resultado-evaluacion/listar-resultado-evaluacion.component';
import { CrearTipoSolicitudComponent } from './tipo-solicitud/crear-tipo-solicitud/crear-tipo-solicitud.component';
import { EditarTipoSolicitudComponent } from './tipo-solicitud/editar-tipo-solicitud/editar-tipo-solicitud.component';
import { EliminarTipoSolicitudComponent } from './tipo-solicitud/eliminar-tipo-solicitud/eliminar-tipo-solicitud.component';
import { ListarTipoSolicitudComponent } from './tipo-solicitud/listar-tipo-solicitud/listar-tipo-solicitud.component';
import { CrearTipoVinculacionComponent } from './tipo-vinculacion/crear-tipo-vinculacion/crear-tipo-vinculacion.component';
import { EditarTipoVinculacionComponent } from './tipo-vinculacion/editar-tipo-vinculacion/editar-tipo-vinculacion.component';
import { EliminarTipoVinculacionComponent } from './tipo-vinculacion/eliminar-tipo-vinculacion/eliminar-tipo-vinculacion.component';
import { ListarTipoVinculacionComponent } from './tipo-vinculacion/listar-tipo-vinculacion/listar-tipo-vinculacion.component';

const routes: Routes = [
  {
    path: "crear-facultad",
    component: CrearFacultadComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-facultad/:id",
    component: EditarFacultadComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-facultad/:id",
    component: EliminarFacultadComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-facultad",
    component: ListarFacultadComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "crear-departamento",
    component: CrearDepartamentoComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-departamento/:id",
    component: EditarDepartamentoComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-departamento/:id",
    component: EliminarDepartamentoComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-departamento",
    component: ListarDepartamentoComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "crear-modalidad",
    component: CrearModalidadComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-modalidad/:id",
    component: EditarModalidadComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-modalidad/:id",
    component: EliminarModalidadComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-modalidad",
    component: ListarModalidadComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "crear-tipo-vinculacion",
    component: CrearTipoVinculacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-tipo-vinculacion/:id",
    component: EditarTipoVinculacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-tipo-vinculacion/:id",
    component: EliminarTipoVinculacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-tipo-vinculacion",
    component: ListarTipoVinculacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "crear-estado-solicitud",
    component: CrearEstadoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-estado-solicitud/:id",
    component: EditarEstadoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-estado-solicitud/:id",
    component: EliminarEstadoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-estado-solicitud",
    component: ListarEstadoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "crear-comite",
    component: CrearComiteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-comite/:id",
    component: EditarComiteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-comite/:id",
    component: EliminarComiteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-comite",
    component: ListarComiteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "crear-linea-investigacion",
    component: CrearLineaInvestigacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-linea-investigacion/:id",
    component: EditarLineaInvestigacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-linea-investigacion/:id",
    component: EliminarLineaInvestigacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-linea-investigacion",
    component: ListarLineaInvestigacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "crear-jurado",
    component: CrearJuradoComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-jurado/:id",
    component: EditarJuradoComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-jurado/:id",
    component: EliminarJuradoComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-jurado",
    component: ListarJuradoComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "crear-resultado-evaluacion",
    component: CrearResultadoEvaluacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-resultado-evaluacion/:id",
    component: EditarResultadoEvaluacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-resultado-evaluacion/:id",
    component: EliminarResultadoEvaluacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-resultado-evaluacion/:id",
    component: ListarResultadoEvaluacionComponent,
    canActivate: [AuthenticatedGuard]
  },{
    path: "crear-tipo-solicitud",
    component: CrearTipoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-tipo-solicitud/:id",
    component: EditarTipoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-tipo-solicitud/:id",
    component: EliminarTipoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-tipo-solicitud",
    component: ListarTipoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
