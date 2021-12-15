import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { CrearRecordatorioComponent } from './crear-recordatorio/crear-recordatorio.component';
import { EditarRecordatorioComponent } from './editar-recordatorio/editar-recordatorio.component';
import { EliminarRecordatorioComponent } from './eliminar-recordatorio/eliminar-recordatorio.component';
import { ListarRecordatorioComponent } from './listar-recordatorio/listar-recordatorio.component';

const routes: Routes = [
  {
    path: "crear-recordatorio/:id",
    component: CrearRecordatorioComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-recordatorio/:id",
    component: EditarRecordatorioComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-recordatorio/:id",
    component: EliminarRecordatorioComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-recordatorio",
    component: ListarRecordatorioComponent,
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordatorioRoutingModule { }
