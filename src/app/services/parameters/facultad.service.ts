import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { FacultadModel } from 'src/app/models/parameters/facultad.model';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  url: string = GeneralData.BUSSINESS_URL;
  constructor(
    private http: HttpClient
  ) { }

  GetRecordList(): Observable<FacultadModel[]>{
    return this.http.get<FacultadModel[]>(`${this.url}/facultades`);
  }
}
