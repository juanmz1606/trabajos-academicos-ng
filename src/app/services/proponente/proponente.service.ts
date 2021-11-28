import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { ProponenteModel } from 'src/app/models/proponente/proponente.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProponenteService {

  url: string = GeneralData.BUSSINESS_URL;
  token: string = ""
  filter: string = `?filter={"include":[{"relation":"tiene_tipoVinculacion"},{"relation":"departamentos"}]}`

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getToken();
  }

  GetRecordList(): Observable<ProponenteModel[]> {
    return this.http.get<ProponenteModel[]>(`${this.url}/proponentes${this.filter}`);
  }

  SearchRecord(id: number): Observable<ProponenteModel> {
    return this.http.get<ProponenteModel>(`${this.url}/proponentes/${id}`);
  }

  SaveRecord(data: ProponenteModel): Observable<ProponenteModel> {
    return this.http.post<ProponenteModel>
      (`${this.url}/proponentes`,
        {
          primerNombre: data.primerNombre,
          otrosNombres: data.otrosNombres,
          primerApellido: data.primerApellido,
          segundoApellido: data.segundoApellido,
          documento: data.documento,
          fechaNacimiento: data.fechaNacimiento,
          email: data.email,
          celular: data.celular,
          fotografia: data.fotografia,
          id_tipoVinculacion: data.id_tipoVinculacion
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          })
        }
      );
  }

  EditeRecord(data: ProponenteModel): Observable<ProponenteModel> {
    return this.http.put<ProponenteModel>
      (`${this.url}/proponentes/${data.id}`,
        {
          id: data.id,
          primerNombre: data.primerNombre,
          otrosNombres: data.otrosNombres,
          primerApellido: data.primerApellido,
          segundoApellido: data.segundoApellido,
          documento: data.documento,
          fechaNacimiento: data.fechaNacimiento,
          email: data.email,
          celular: data.celular,
          fotografia: data.fotografia,
          id_tipoVinculacion: data.id_tipoVinculacion
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          })
        }
      );
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete(`${this.url}/proponentes/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      }
    );
  }
}
