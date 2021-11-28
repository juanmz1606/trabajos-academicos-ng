import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parameters/departamento.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  url: string = GeneralData.BUSSINESS_URL;
  token: string = ""
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getToken();
   }

  GetRecordList(): Observable<DepartamentoModel[]> {
    return this.http.get<DepartamentoModel[]>(`${this.url}/departamentos`);
  }

  SearchRecord(id:number): Observable<DepartamentoModel>{
    return this.http.get<DepartamentoModel>(`${this.url}/departamentos/${id}`);
  }

  SaveRecord(data: DepartamentoModel): Observable<DepartamentoModel> {
    
    return this.http.post<DepartamentoModel>
    (`${this.url}/departamentos`,
    {
      nombre: data.nombre,
      id_facultad: data.id_facultad
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    }
    );
  }

  EditeRecord(data: DepartamentoModel): Observable<DepartamentoModel> {
    return this.http.put<DepartamentoModel>
    (`${this.url}/departamentos/${data.id}`,
    {
      id: data.id,
      nombre: data.nombre,
      id_facultad: data.id_facultad
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    }
    );
  }

  RemoveRecord(id:number): Observable<any> {
    return this.http.delete(`${this.url}/departamentos/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    }
    );
  }
}
