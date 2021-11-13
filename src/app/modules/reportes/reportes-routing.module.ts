import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuradosPorLineaInvestigacionComponent } from './jurados-por-linea-investigacion/jurados-por-linea-investigacion.component';
import { SolicitudesPorEstadoSolicitudComponent } from './solicitudes-por-estado-solicitud/solicitudes-por-estado-solicitud.component';
import { SolicitudesPorFechaComponent } from './solicitudes-por-fecha/solicitudes-por-fecha.component';

const routes: Routes = [
  {
    path: "solicitudes-por-fecha",
    component: SolicitudesPorFechaComponent
  },
  {
    path: "jurados-por-linea-investigacion",
    component: JuradosPorLineaInvestigacionComponent
  },
  {
    path: "solicitudes-por-estado-solicitud",
    component: SolicitudesPorEstadoSolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
