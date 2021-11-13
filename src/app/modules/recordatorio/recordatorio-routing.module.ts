import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearRecordatorioComponent } from './crear-recordatorio/crear-recordatorio.component';
import { EditarRecordatorioComponent } from './editar-recordatorio/editar-recordatorio.component';
import { EliminarRecordatorioComponent } from './eliminar-recordatorio/eliminar-recordatorio.component';
import { ListarRecordatorioComponent } from './listar-recordatorio/listar-recordatorio.component';

const routes: Routes = [
  {
    path: "crear-recordatorio",
    component: CrearRecordatorioComponent
  },
  {
    path: "editar-recordatorio",
    component: EditarRecordatorioComponent
  },
  {
    path: "eliminar-recordatorio",
    component: EliminarRecordatorioComponent
  },
  {
    path: "listar-recordatorio",
    component: ListarRecordatorioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordatorioRoutingModule { }
