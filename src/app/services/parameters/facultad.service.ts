import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { FacultadModel } from 'src/app/models/parameters/facultad.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  url: string = GeneralData.BUSSINESS_URL;
  token: string = ""
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getToken();
   }

  GetRecordList(): Observable<FacultadModel[]> {
    return this.http.get<FacultadModel[]>(`${this.url}/facultades`);
  }

  SearchRecord(id:number): Observable<FacultadModel>{
    return this.http.get<FacultadModel>(`${this.url}/facultades/${id}`);
  }

  SaveRecord(data: FacultadModel): Observable<FacultadModel> {
    return this.http.post<FacultadModel>
    (`${this.url}/facultades`,
    {
      codigo: data.codigo,
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    }
    );
  }

  EditeRecord(data: FacultadModel): Observable<FacultadModel> {
    return this.http.put<FacultadModel>
    (`${this.url}/facultades/${data.id}`,
    {
      id: data.id,
      codigo: data.codigo,
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
    return this.http.delete(`${this.url}/facultades/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    }
    );
  }
}
