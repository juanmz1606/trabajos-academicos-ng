import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { UnauthenticatedGuard } from 'src/app/guards/unauthenticated.guard';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';

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
    path: "editar-usuario",
    component: EditarUsuarioComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-usuario",
    component: EliminarUsuarioComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-usuario",
    component: ListarUsuarioComponent,
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
