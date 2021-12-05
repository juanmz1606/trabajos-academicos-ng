import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { ProponenteModel } from 'src/app/models/proponente/proponente.model';
import { ProponenteService } from 'src/app/services/proponente/proponente.service';

@Component({
  selector: 'app-listar-proponente',
  templateUrl: './listar-proponente.component.html',
  styleUrls: ['./listar-proponente.component.css']
})
export class ListarProponenteComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  recordList: ProponenteModel[] = [];

  constructor(
    private service: ProponenteService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  GetRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: ProponenteModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;
      }
    })
  }

}
