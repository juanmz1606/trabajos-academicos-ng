import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string = GeneralData.ADMIN_USERS_URL;
  token: string = ""
  filter: string = `?filter={"include":[{"relation":"roles"}]}`

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getToken();
  }

  GetRecordList(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(`${this.url}/usuarios${this.filter}`);
  }

  SearchRecord(_id: string): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.url}/usuarios/${_id}`);
  }

  SaveRecord(data: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>
      (`${this.url}/usuarios`,
        {
          nombre: data.nombre,
          apellidos: data.apellidos,
          documento: data.documento,
          fechaNacimiento: data.fechaNacimiento,
          correo: data.correo,
          celular: data.celular
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          })
        }
      );
  }

  EditeRecord(data: UsuarioModel): Observable<UsuarioModel> {
    return this.http.put<UsuarioModel>
      (`${this.url}/usuarios/${data._id}`,
        {
          _id: data._id,
          nombre: data.nombre,
          apellidos: data.apellidos,
          documento: data.documento,
          fechaNacimiento: data.fechaNacimiento,
          correo: data.correo,
          celular: data.celular
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          })
        }
      );
  }

  RemoveRecord(_id: string): Observable<any> {
    return this.http.delete(`${this.url}/usuarios/${_id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      }
    );
  }

}