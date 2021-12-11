import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/models/parameters/jurado.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class JuradoService {

  url: string = GeneralData.BUSSINESS_URL;
  token: string = ""
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getToken();
  }

  GetRecordList(): Observable<JuradoModel[]> {
    return this.http.get<JuradoModel[]>(`${this.url}/jurados`);
  }

  SearchRecord(id: number): Observable<JuradoModel> {
    return this.http.get<JuradoModel>(`${this.url}/jurados/${id}`);
  }

  SaveRecord(data: JuradoModel): Observable<JuradoModel> {
    return this.http.post<JuradoModel>
      (`${this.url}/jurados`,
        {
          nombre: data.nombre,
          telefono: data.telefono,
          email: data.email,
          entidad: data.entidad
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          })
        }
      );
  }

  EditeRecord(data: JuradoModel): Observable<JuradoModel> {
    return this.http.put<JuradoModel>
      (`${this.url}/jurados/${data.id}`,
        {
          id: data.id,
          nombre: data.nombre,
          telefono: data.telefono,
          email: data.email,
          entidad: data.entidad
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          })
        }
      );
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete(`${this.url}/jurados/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      }
    );
  }
}
