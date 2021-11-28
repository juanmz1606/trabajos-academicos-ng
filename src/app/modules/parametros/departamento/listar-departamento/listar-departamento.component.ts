import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parameters/departamento.model';
import { DepartamentoService } from 'src/app/services/parameters/departamento.service';

@Component({
  selector: 'app-listar-departamento',
  templateUrl: './listar-departamento.component.html',
  styleUrls: ['./listar-departamento.component.css']
})
export class ListarDepartamentoComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  recordList: DepartamentoModel[] = [];

  constructor(
    private service: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  GetRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: DepartamentoModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;
      }
    })
  }

}
