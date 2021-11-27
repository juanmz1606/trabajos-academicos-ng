import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { CrearTipoVinculacionComponent } from './tipo-vinculacion/crear-tipo-vinculacion/crear-tipo-vinculacion.component';
import { EditarTipoVinculacionComponent } from './tipo-vinculacion/editar-tipo-vinculacion/editar-tipo-vinculacion.component';
import { EliminarTipoVinculacionComponent } from './tipo-vinculacion/eliminar-tipo-vinculacion/eliminar-tipo-vinculacion.component';
import { ListarTipoVinculacionComponent } from './tipo-vinculacion/listar-tipo-vinculacion/listar-tipo-vinculacion.component';

const routes: Routes = [
  {
    path: "crear-facultad",
    component: CrearFacultadComponent
  },
  {
    path: "editar-facultad/:id",
    component: EditarFacultadComponent
  },
  {
    path: "eliminar-facultad/:id",
    component: EliminarFacultadComponent
  },
  {
    path: "listar-facultad",
    component: ListarFacultadComponent
  },
  {
    path: "crear-departamento",
    component: CrearDepartamentoComponent
  },
  {
    path: "editar-departamento",
    component: EditarDepartamentoComponent
  },
  {
    path: "eliminar-departamento",
    component: EliminarDepartamentoComponent
  },
  {
    path: "listar-departamento",
    component: ListarDepartamentoComponent
  },
  {
    path: "crear-modalidad",
    component: CrearModalidadComponent
  },
  {
    path: "editar-modalidad",
    component: EditarModalidadComponent
  },
  {
    path: "eliminar-modalidad",
    component: EliminarModalidadComponent
  },
  {
    path: "listar-modalidad",
    component: ListarModalidadComponent
  },
  {
    path: "crear-tipo-vinculacion",
    component: CrearTipoVinculacionComponent
  },
  {
    path: "editar-tipo-vinculacion",
    component: EditarTipoVinculacionComponent
  },
  {
    path: "eliminar-tipo-vinculacion",
    component: EliminarTipoVinculacionComponent
  },
  {
    path: "listar-tipo-vinculacion",
    component: ListarTipoVinculacionComponent
  },
  {
    path: "crear-estado-solicitud",
    component: CrearEstadoSolicitudComponent
  },
  {
    path: "editar-estado-solicitud",
    component: EditarEstadoSolicitudComponent
  },
  {
    path: "eliminar-estado-solicitud",
    component: EliminarEstadoSolicitudComponent
  },
  {
    path: "listar-estado-solicitud",
    component: ListarEstadoSolicitudComponent
  },
  {
    path: "crear-comite",
    component: CrearComiteComponent
  },
  {
    path: "editar-comite",
    component: EditarComiteComponent
  },
  {
    path: "eliminar-comite",
    component: EliminarComiteComponent
  },
  {
    path: "listar-comite",
    component: ListarComiteComponent
  },
  {
    path: "crear-linea-investigacion",
    component: CrearLineaInvestigacionComponent
  },
  {
    path: "editar-linea-investigacion",
    component: EditarLineaInvestigacionComponent
  },
  {
    path: "eliminar-linea-investigacion",
    component: EliminarLineaInvestigacionComponent
  },
  {
    path: "listar-linea-investigacion",
    component: ListarLineaInvestigacionComponent
  },
  {
    path: "crear-jurado",
    component: CrearJuradoComponent
  },
  {
    path: "editar-jurado",
    component: EditarJuradoComponent
  },
  {
    path: "eliminar-jurado",
    component: EliminarJuradoComponent
  },
  {
    path: "listar-jurado",
    component: ListarJuradoComponent
  },
  {
    path: "crear-resultado-evaluacion",
    component: CrearResultadoEvaluacionComponent
  },
  {
    path: "editar-resultado-evaluacion",
    component: EditarResultadoEvaluacionComponent
  },
  {
    path: "eliminar-resultado-evaluacion",
    component: EliminarResultadoEvaluacionComponent
  },
  {
    path: "listar-resultado-evaluacion",
    component: ListarResultadoEvaluacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
