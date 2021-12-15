import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CambioClaveModel } from 'src/app/models/cambio-clave.model';
import { SessionData } from 'src/app/models/session-data.model';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { GeneralData } from '../../config/general-data';
import { ModeloCredencialesUsuario } from '../../models/credenciales-usuario.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url: string = GeneralData.ADMIN_USERS_URL;
  sessionDataSubject: BehaviorSubject<SessionData> = new BehaviorSubject<SessionData>(new SessionData());

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.IsThereActiveSession();
   }

  IsThereActiveSession(){
    let data = localStorage.getItem("session-data");
    if (data) {
      let objectData: SessionData = JSON.parse(data);
      objectData.isLoggedIn = true;
      this.RefreshSessionData(objectData);
    }
  }

  RefreshSessionData(data: SessionData){
    this.sessionDataSubject.next(data);
  }

  GetSessionStatus(){
    return this.sessionDataSubject.asObservable();
  }

  Login(modelo: ModeloCredencialesUsuario): Observable<SessionData>{
    return this.http.post<SessionData>(`${this.url}/identificar-usuario`,{
      usuario: modelo.usuario,
      clave: modelo.contrasena
    });
  }

  CambiarClave(modelo: CambioClaveModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>(`${this.url}/cambiar-clave`,{
      id_usuario: modelo.id_usuario,
      clave_actual: modelo.clave_actual,
      nueva_clave: modelo.nueva_clave
    });
  }

  VerificarToken(): Observable<boolean>{
    let tk = this.localStorageService.getToken()
    if(tk == ""){
      return of(false);
    }
    return this.http.post<boolean>(`${this.url}/token-validator`,{
      token: tk
    });
  }

}
