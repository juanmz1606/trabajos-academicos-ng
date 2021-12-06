import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { TipoVinculacionModel } from 'src/app/models/parameters/tipo-vinculacion.model';
import { TipoVinculacionService } from 'src/app/services/parameters/tipo-vinculacion.service';

@Component({
  selector: 'app-listar-tipo-vinculacion',
  templateUrl: './listar-tipo-vinculacion.component.html',
  styleUrls: ['./listar-tipo-vinculacion.component.css']
})
export class ListarTipoVinculacionComponent implements OnInit {

  pageSize: number = GeneralData.RECORDS_BY_PAGE
  p: number = 1
  total: number = 0
  recordList: TipoVinculacionModel[] = [];

  constructor(
    private service: TipoVinculacionService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  GetRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: TipoVinculacionModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;
      }
    })
  }

}
