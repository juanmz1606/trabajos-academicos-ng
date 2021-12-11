import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { EstadoSolicitudModel } from 'src/app/models/parameters/estado-solicitud.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EstadoSolicitudService {

  url: string = GeneralData.BUSSINESS_URL;
  token: string = ""
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getToken();
   }

  GetRecordList(): Observable<EstadoSolicitudModel[]> {
    return this.http.get<EstadoSolicitudModel[]>(`${this.url}/estados-solicitud`);
  }

  SearchRecord(id:number): Observable<EstadoSolicitudModel>{
    return this.http.get<EstadoSolicitudModel>(`${this.url}/estados-solicitud/${id}`);
  }

  SaveRecord(data: EstadoSolicitudModel): Observable<EstadoSolicitudModel> {
    return this.http.post<EstadoSolicitudModel>
    (`${this.url}/estados-solicitud`,
    {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    }
    );
  }

  EditeRecord(data: EstadoSolicitudModel): Observable<EstadoSolicitudModel> {
    return this.http.put<EstadoSolicitudModel>
    (`${this.url}/estados-solicitud/${data.id}`,
    {
      id: data.id,
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    }
    );
  }

  RemoveRecord(id:number): Observable<any> {
    return this.http.delete(`${this.url}/estados-solicitud/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    }
    );
  }
}
