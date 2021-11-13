import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './public/errors/not-found/not-found.component';
import { HomeComponent } from './public/general/home/home.component';

const routes: Routes = [
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "seguridad",
    loadChildren:()=> import("./modules/seguridad/seguridad.module").then(x =>  x.SeguridadModule)
  },
  {
    path: "parametros",
    loadChildren:()=> import("./modules/parametros/parametros.module").then(x =>  x.ParametrosModule)
  },
  {
    path: "proponente",
    loadChildren:()=> import("./modules/proponente/proponente.module").then(x =>  x.ProponenteModule)
  },
  {
    path: "invitacion-evaluar",
    loadChildren:()=> import("./modules/invitacion-evaluar/invitacion-evaluar.module").then(x =>  x.InvitacionEvaluarModule)
  },
  {
    path: "recordatorio",
    loadChildren:()=> import("./modules/recordatorio/recordatorio.module").then(x =>  x.RecordatorioModule)
  },
  {
    path: "solicitud",
    loadChildren:()=> import("./modules/solicitud/solicitud.module").then(x =>  x.SolicitudModule)
  },
  {
    path: "reportes",
    loadChildren:()=> import("./modules/reportes/reportes.module").then(x =>  x.ReportesModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
