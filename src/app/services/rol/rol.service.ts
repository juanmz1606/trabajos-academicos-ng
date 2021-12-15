import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { RolModel } from 'src/app/models/rol/rol.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url: string = GeneralData.ADMIN_USERS_URL;
  token: string = ""
  filter: string = `?filter={"include":[{"relation":"usuarios"}]}`

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.getToken();
  }

  GetRecordList(): Observable<RolModel[]> {
    return this.http.get<RolModel[]>(`${this.url}/roles${this.filter}`);
  }

  SearchRecord(_id: string): Observable<RolModel> {
    return this.http.get<RolModel>(`${this.url}/roles/${_id}`);
  }

  SaveRecord(data: RolModel): Observable<RolModel> {
    return this.http.post<RolModel>
      (`${this.url}/roles`,
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

  EditeRecord(data: RolModel): Observable<RolModel> {
    return this.http.put<RolModel>
      (`${this.url}/roles/${data._id}`,
        {
          _id: data._id,
          nombre: data.nombre
        },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          })
        }
      );
  }

  RemoveRecord(_id: string): Observable<any> {
    return this.http.delete(`${this.url}/roles/${_id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      }
    );
  }
}
