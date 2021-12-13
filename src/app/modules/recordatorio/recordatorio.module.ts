import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordatorioRoutingModule } from './recordatorio-routing.module';
import { CrearRecordatorioComponent } from './crear-recordatorio/crear-recordatorio.component';
import { EditarRecordatorioComponent } from './editar-recordatorio/editar-recordatorio.component';
import { EliminarRecordatorioComponent } from './eliminar-recordatorio/eliminar-recordatorio.component';
import { ListarRecordatorioComponent } from './listar-recordatorio/listar-recordatorio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    CrearRecordatorioComponent,
    EditarRecordatorioComponent,
    EliminarRecordatorioComponent,
    ListarRecordatorioComponent
  ],
  imports: [
    CommonModule,
    RecordatorioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class RecordatorioModule { }
