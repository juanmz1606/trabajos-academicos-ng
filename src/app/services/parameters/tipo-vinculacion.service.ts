import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { TipoVinculacionModel } from 'src/app/models/parameters/tipo-vinculacion.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TipoVinculacionService {

  url: string = GeneralData.BUSSINESS_URL;
  token: string = ""
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getToken();
  }

  GetRecordList(): Observable<TipoVinculacionModel[]> {
    return this.http.get<TipoVinculacionModel[]>(`${this.url}/tipos-vinculacion`);
  }

  SearchRecord(id: number): Observable<TipoVinculacionModel> {
    return this.http.get<TipoVinculacionModel>(`${this.url}/tipos-vinculacion/${id}`);
  }

  SaveRecord(data: TipoVinculacionModel): Observable<TipoVinculacionModel> {

    return this.http.post<TipoVinculacionModel>
      (`${this.url}/tipos-vinculacion`,
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

  EditeRecord(data: TipoVinculacionModel): Observable<TipoVinculacionModel> {
    return this.http.put<TipoVinculacionModel>
      (`${this.url}/tipos-vinculacion/${data.id}`,
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
    return this.http.delete(`${this.url}/tipos-vinculacion/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      }
    );
  }
}
