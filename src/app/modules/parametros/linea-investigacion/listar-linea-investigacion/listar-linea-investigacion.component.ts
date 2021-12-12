import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { LineaInvestigacionModel } from 'src/app/models/parameters/lineaInvestigacion.model';
import { LineaInvestigacionService } from 'src/app/services/parameters/linea-investigacion.service';

@Component({
  selector: 'app-listar-linea-investigacion',
  templateUrl: './listar-linea-investigacion.component.html',
  styleUrls: ['./listar-linea-investigacion.component.css']
})
export class ListarLineaInvestigacionComponent implements OnInit {
  
  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  recordList: LineaInvestigacionModel[] = [];

  constructor(
    private service: LineaInvestigacionService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  GetRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: LineaInvestigacionModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;
      }
    })
  }

}