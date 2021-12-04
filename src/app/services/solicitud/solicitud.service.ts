import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { UploadedFileModel } from 'src/app/models/proponente/uploaded-file.model';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  url: string = GeneralData.BUSSINESS_URL;
  token: string = ""
  //filter: string = `?filter={"include":[{"relation":"tiene_tipoVinculacion"},{"relation":"departamentos"}]}`

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getToken();
  }

  GetRecordList(): Observable<SolicitudModel[]> {
    return this.http.get<SolicitudModel[]>(`${this.url}/solicitudes`);
  }

  SearchRecord(id: number): Observable<SolicitudModel> {
    return this.http.get<SolicitudModel>(`${this.url}/solicitudes/${id}`);
  }

  SaveRecord(data: SolicitudModel): Observable<SolicitudModel> {
    return this.http.post<SolicitudModel>
      (`${this.url}/solicitudes`,
        {
          fecha: data.fecha,
          nombreTrabajo: data.nombreTrabajo,
          archivo: data.archivo,
          descripcion: data.descripcion,
          id_modalidad: data.id_modalidad,
          id_tipoSolicitud: data.id_tipoSolicitud,
          id_estadoSolicitud: data.id_estadoSolicitud,
          id_lineaInvestigacion: data.id_lineaInvestigacion
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          })
        }
      );
  }

  EditeRecord(data: SolicitudModel): Observable<SolicitudModel> {
    return this.http.put<SolicitudModel>
      (`${this.url}/solicitudes/${data.id}`,
        {
          id: data.id,
          fecha: data.fecha,
          nombreTrabajo: data.nombreTrabajo,
          archivo: data.archivo,
          descripcion: data.descripcion,
          id_modalidad: data.id_modalidad,
          id_tipoSolicitud: data.id_tipoSolicitud,
          id_estadoSolicitud: data.id_estadoSolicitud,
          id_lineaInvestigacion: data.id_lineaInvestigacion
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          })
        }
      );
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete(`${this.url}/solicitudes/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      }
    );
  }

  UploadFile(formData: FormData) {
    return this.http.post<UploadedFileModel>
      (`${this.url}/CargarArchivoSolicitud`,
        formData
        ,
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          })
        }
      );
  }
}
