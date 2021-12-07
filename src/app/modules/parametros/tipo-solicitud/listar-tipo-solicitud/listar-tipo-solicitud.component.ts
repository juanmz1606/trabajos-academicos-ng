import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud.model';
import { TipoSolicitudService } from 'src/app/services/parameters/tipo-solicitud.service';

@Component({
  selector: 'app-listar-tipo-solicitud',
  templateUrl: './listar-tipo-solicitud.component.html',
  styleUrls: ['./listar-tipo-solicitud.component.css']
})
export class ListarTipoSolicitudComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  recordList: TipoSolicitudModel[] = [];

  constructor(
    private service: TipoSolicitudService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  GetRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: TipoSolicitudModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;
      }
    })
  }

}
