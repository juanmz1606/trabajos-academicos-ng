import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { ComiteModel } from 'src/app/models/parameters/comite.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ComiteService {

  url: string = GeneralData.BUSSINESS_URL;
  token: string = ""
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getToken();
  }

  GetRecordList(): Observable<ComiteModel[]> {
    return this.http.get<ComiteModel[]>(`${this.url}/comites`);
  }

  SearchRecord(id: number): Observable<ComiteModel> {
    return this.http.get<ComiteModel>(`${this.url}/comites/${id}`);
  }

  SaveRecord(data: ComiteModel): Observable<ComiteModel> {
    return this.http.post<ComiteModel>
      (`${this.url}/comites`,
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

  EditeRecord(data: ComiteModel): Observable<ComiteModel> {
    return this.http.put<ComiteModel>
      (`${this.url}/comites/${data.id}`,
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

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete(`${this.url}/comites/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      }
    );
  }
}
