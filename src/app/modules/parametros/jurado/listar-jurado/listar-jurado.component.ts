import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/models/parameters/jurado.model';
import { JuradoService } from 'src/app/services/parameters/jurado.service';

@Component({
  selector: 'app-listar-jurado',
  templateUrl: './listar-jurado.component.html',
  styleUrls: ['./listar-jurado.component.css']
})
export class ListarJuradoComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  recordList: JuradoModel[] = [];

  constructor(
    private service: JuradoService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  GetRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: JuradoModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;
      }
    })
  }
}
