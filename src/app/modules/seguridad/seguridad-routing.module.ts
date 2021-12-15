import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { UnauthenticatedGuard } from 'src/app/guards/unauthenticated.guard';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CrearRolComponent } from './rol/crear-rol/crear-rol.component';
import { EditarRolComponent } from './rol/editar-rol/editar-rol.component';
import { EliminarRolComponent } from './rol/eliminar-rol/eliminar-rol.component';
import { ListarRolComponent } from './rol/listar-rol/listar-rol.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { CrearUsuarioJuradoComponent } from './usuarioJurado/crear-usuario-jurado/crear-usuario-jurado.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "cambiar-clave",
    component: CambioClaveComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "recuperar-clave",
    component: RecuperarClaveComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: "crear-usuario",
    component: CrearUsuarioComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-usuario/:_id",
    component: EditarUsuarioComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-usuario/:_id",
    component: EliminarUsuarioComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-usuario",
    component: ListarUsuarioComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "crear-rol",
    component: CrearRolComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-rol/:_id",
    component: EditarRolComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-rol/:_id",
    component: EliminarRolComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-rol",
    component: ListarRolComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "crear-usuario-jurado/:id",
    component: CrearUsuarioJuradoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
