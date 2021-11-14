import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from '../../config/general-data';
import { ModeloCredencialesUsuario } from '../../models/credenciales-usuario.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url: string = GeneralData.ADMIN_USERS_URL;

  constructor(
    private http: HttpClient
  ) { }

  Login(modelo: ModeloCredencialesUsuario): Observable<any>{
    return this.http.post(`${this.url}/identificar-usuario`,{
      usuario: modelo.usuario,
      clave: modelo.contrasena
    });
  }

}
