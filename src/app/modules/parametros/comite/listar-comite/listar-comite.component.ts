import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { ComiteModel } from 'src/app/models/parameters/comite.model';
import { ComiteService } from 'src/app/services/parameters/comite.service';

@Component({
  selector: 'app-listar-comite',
  templateUrl: './listar-comite.component.html',
  styleUrls: ['./listar-comite.component.css']
})
export class ListarComiteComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  recordList: ComiteModel[] = [];

  constructor(
    private service: ComiteService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  GetRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: ComiteModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;
      }
    })
  }

}