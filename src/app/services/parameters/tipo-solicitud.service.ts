import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud.model';
import { UploadedFileModel } from 'src/app/models/uploaded-file.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TipoSolicitudService {

  url: string = GeneralData.BUSSINESS_URL;
  token: string = ""

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getToken();
  }

  GetRecordList(): Observable<TipoSolicitudModel[]> {
    return this.http.get<TipoSolicitudModel[]>(`${this.url}/tipos-solicitud`);
  }

  SearchRecord(id: number): Observable<TipoSolicitudModel> {
    return this.http.get<TipoSolicitudModel>(`${this.url}/tipos-solicitud/${id}`);
  }

  SaveRecord(data: TipoSolicitudModel): Observable<TipoSolicitudModel> {
    return this.http.post<TipoSolicitudModel>
      (`${this.url}/tipos-solicitud`,
        {
          nombre: data.nombre,
          formato: data.formato
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          })
        }
      );
  }

  EditeRecord(data: TipoSolicitudModel): Observable<TipoSolicitudModel> {
    return this.http.put<TipoSolicitudModel>
      (`${this.url}/tipos-solicitud/${data.id}`,
        {
          id: data.id,
          nombre: data.nombre,
          formato: data.formato
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          })
        }
      );
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete(`${this.url}/tipos-solicitud/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      }
    );
  }

  UploadFile(formData: FormData) {
    return this.http.post<UploadedFileModel>
      (`${this.url}/CargarFormatoTipoSolicitud`,
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
