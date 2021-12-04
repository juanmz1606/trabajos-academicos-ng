import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { CrearProponenteComponent } from './crear-proponente/crear-proponente.component';
import { EditarProponenteComponent } from './editar-proponente/editar-proponente.component';
import { EliminarProponenteComponent } from './eliminar-proponente/eliminar-proponente.component';
import { FotografiaProponenteComponent } from './fotografia-proponente/fotografia-proponente.component';
import { ListarProponenteComponent } from './listar-proponente/listar-proponente.component';

const routes: Routes = [
  {
    path: "crear-proponente",
    component: CrearProponenteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-proponente/:id",
    component: EditarProponenteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-proponente/:id",
    component: EliminarProponenteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-proponente",
    component: ListarProponenteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "fotografia-proponente",
    component: FotografiaProponenteComponent,
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProponenteRoutingModule { }
