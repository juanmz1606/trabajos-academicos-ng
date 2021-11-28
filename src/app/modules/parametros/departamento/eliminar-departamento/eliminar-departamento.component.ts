import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parameters/departamento.model';
import { DepartamentoService } from 'src/app/services/parameters/departamento.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-departamento',
  templateUrl: './eliminar-departamento.component.html',
  styleUrls: ['./eliminar-departamento.component.css']
})
export class EliminarDepartamentoComponent implements OnInit {

  id: number = 0;
  nombre: string = "";
  id_facultad: number = 0;

  constructor(
    private router: Router,
    private service: DepartamentoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: DepartamentoModel) => {
        if (data.id && data.nombre && data.id_facultad) {
          this.id = data.id;
          this.nombre = data.nombre;
          this.id_facultad = data.id_facultad;
        }
      }
    });
  }

  RemoveRecord(){
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: DepartamentoModel) => {
        OpenGeneralMessageModal(GeneralData.REMOVED_MESSAGE);
        this.router.navigate(["/parametros/listar-departamento"]);
      },
      error: (err: any) =>{
        OpenGeneralMessageModal(GeneralData.ERROR_REMOVED_MESSAGE);
      }
    });
  }

}
