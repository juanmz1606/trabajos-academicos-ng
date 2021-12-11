import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { LineaInvestigacionModel } from 'src/app/models/parameters/lineaInvestigacion.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class LineaInvestigacionService {
  url: string = GeneralData.BUSSINESS_URL;
  token: string = ""
  filter: string = `?filter={"include":[{"relation":"jurados"}]}`

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getToken();
  }

  GetRecordList(): Observable<LineaInvestigacionModel[]> {
    return this.http.get<LineaInvestigacionModel[]>(`${this.url}/lineas-investigacion${this.filter}`);
  }

  SearchRecord(id: number): Observable<LineaInvestigacionModel> {
    return this.http.get<LineaInvestigacionModel>(`${this.url}/lineas-investigacion/${id}`);
  }

  SaveRecord(data: LineaInvestigacionModel): Observable<LineaInvestigacionModel> {
    return this.http.post<LineaInvestigacionModel>
      (`${this.url}/lineas-investigacion`,
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

  EditeRecord(data: LineaInvestigacionModel): Observable<LineaInvestigacionModel> {
    return this.http.put<LineaInvestigacionModel>
      (`${this.url}/lineas-investigacion/${data.id}`,
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
    return this.http.delete(`${this.url}/lineas-investigacion/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      }
    );
  }


}
