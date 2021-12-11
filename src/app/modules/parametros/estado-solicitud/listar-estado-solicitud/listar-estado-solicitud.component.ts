import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { EstadoSolicitudModel } from 'src/app/models/parameters/estado-solicitud.model';
import { EstadoSolicitudService } from 'src/app/services/parameters/estado-solicitud.service';

@Component({
  selector: 'app-listar-estado-solicitud',
  templateUrl: './listar-estado-solicitud.component.html',
  styleUrls: ['./listar-estado-solicitud.component.css']
})
export class ListarEstadoSolicitudComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  recordList: EstadoSolicitudModel[] = [];

  constructor(
    private service: EstadoSolicitudService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  GetRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: EstadoSolicitudModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;
      }
    })
  }

}
