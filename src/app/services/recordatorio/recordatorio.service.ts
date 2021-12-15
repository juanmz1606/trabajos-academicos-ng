import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { RecordatorioModel } from 'src/app/models/recordatorio/recordatorio.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecordatorioService {


  url: string = GeneralData.BUSSINESS_URL;
  token: string = ""
  filter: string = `?filter={"include":[{"relation":"tiene_invitacionEvaluar"}]}`

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getToken();
  }
  GetRecordList(): Observable<RecordatorioModel[]> {
    return this.http.get<RecordatorioModel[]>(`${this.url}/recordatorios${this.filter}`);
  }

  SearchRecord(id: number): Observable<RecordatorioModel> {
    return this.http.get<RecordatorioModel>(`${this.url}/recordatorios/${id}${this.filter}`);
  }

  SaveRecord(data: RecordatorioModel): Observable<RecordatorioModel> {
    return this.http.post<RecordatorioModel>
      (`${this.url}/recordatorios`,
        {
          fecha: data.fecha,
          hora: data.hora,
          tipoRecordatorio: data.tipoRecordatorio,
          descripcion: data.descripcion,
          id_invitacionEvaluar: data.id_invitacionEvaluar
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          })
        }
      );
  }

  EditeRecord(data: RecordatorioModel): Observable<RecordatorioModel> {
    return this.http.put<RecordatorioModel>
      (`${this.url}/recordatorios/${data.id}`,
        {
          id: data.id,
          fecha: data.fecha,
          hora: data.hora,
          tipoRecordatorio: data.tipoRecordatorio,
          descripcion: data.descripcion,
          id_invitacionEvaluar: data.id_invitacionEvaluar
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          })
        }
      );
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete(`${this.url}/recordatorios/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      }
    );
  }
}
