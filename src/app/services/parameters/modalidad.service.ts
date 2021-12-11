import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { ModalidadModel } from 'src/app/models/parameters/modalidad.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  url: string = GeneralData.BUSSINESS_URL;
  token: string = ""
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getToken();
   }

  GetRecordList(): Observable<ModalidadModel[]> {
    return this.http.get<ModalidadModel[]>(`${this.url}/modalidades`);
  }

  SearchRecord(id:number): Observable<ModalidadModel>{
    return this.http.get<ModalidadModel>(`${this.url}/modalidades/${id}`);
  }

  SaveRecord(data: ModalidadModel): Observable<ModalidadModel> {
    return this.http.post<ModalidadModel>
    (`${this.url}/modalidades`,
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

  EditeRecord(data: ModalidadModel): Observable<ModalidadModel> {
    return this.http.put<ModalidadModel>
    (`${this.url}/modalidades/${data.id}`,
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
    return this.http.delete(`${this.url}/modalidades/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    }
    );
  }
}
