import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { InvitacionEvaluarModel } from 'src/app/models/invitacion-evaluar/invitacion-evaluar.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class InvitacionEvaluarService {
 
  url: string = GeneralData.BUSSINESS_URL;
  token: string = ""
  filter: string = `?filter={"include":[{"relation":"tiene_jurado"}]}`

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getToken();
  }
  GetRecordList(): Observable<InvitacionEvaluarModel[]> {
    return this.http.get<InvitacionEvaluarModel[]>(`${this.url}/invitaciones-evaluar${this.filter}`);
  }

  SearchRecord(id: number): Observable<InvitacionEvaluarModel> {
    return this.http.get<InvitacionEvaluarModel>(`${this.url}/invitaciones-evaluar/${id}${this.filter}`);
  }
  SearchRecordByIdSolicitud(id: number): Observable<InvitacionEvaluarModel[]> {
    return this.http.get<InvitacionEvaluarModel[]>(`${this.url}/solicitudes/${id}/invitaciones-evaluar${this.filter}`);
  }

  SaveRecord(data: InvitacionEvaluarModel): Observable<Boolean> {
    return this.http.post<Boolean>
      (`${this.url}/invitaciones-evaluar`,
        {
          fechaInvitacion: data.fechaInvitacion,
          fechaRespuesta: data.fechaRespuesta,
          estadoInvitacion: data.estadoInvitacion,
          observaciones: data.observaciones,
          id_solicitud: data.id_solicitud,
          id_jurado: data.id_jurado
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          })
        }
      );
  }

  EditeRecord(data: InvitacionEvaluarModel): Observable<InvitacionEvaluarModel> {
    return this.http.put<InvitacionEvaluarModel>
      (`${this.url}/invitaciones-evaluar/${data.id}`,
        {
          id: data.id,
          fechaInvitacion: data.fechaInvitacion,
          fechaRespuesta: data.fechaRespuesta,
          estadoInvitacion: data.estadoInvitacion,
          observaciones: data.observaciones,
          id_solicitud: data.id_solicitud,
          id_jurado: data.id_jurado
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          })
        }
      );
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete(`${this.url}/invitaciones-evaluar/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      }
    );
  }
}
