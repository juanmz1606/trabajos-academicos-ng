import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { SolicitudesPorFechaComponent } from './solicitudes-por-fecha/solicitudes-por-fecha.component';
import { JuradosPorLineaInvestigacionComponent } from './jurados-por-linea-investigacion/jurados-por-linea-investigacion.component';
import { SolicitudesPorEstadoSolicitudComponent } from './solicitudes-por-estado-solicitud/solicitudes-por-estado-solicitud.component';


@NgModule({
  declarations: [
    SolicitudesPorFechaComponent,
    JuradosPorLineaInvestigacionComponent,
    SolicitudesPorEstadoSolicitudComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
