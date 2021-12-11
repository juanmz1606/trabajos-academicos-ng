import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';

@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar-solicitudes.component.html',
  styleUrls: ['./listar-solicitudes.component.css']
})
export class ListarSolicitudesComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  recordList: SolicitudModel[] = [];

  constructor(
    private service: SolicitudService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  GetRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: SolicitudModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;
      }
    })
  }

}
