import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './login/login.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { LogoutComponent } from './logout/logout.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    LoginComponent,
    CambioClaveComponent,
    RecuperarClaveComponent,
    LogoutComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    ListarUsuarioComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class SeguridadModule { }
