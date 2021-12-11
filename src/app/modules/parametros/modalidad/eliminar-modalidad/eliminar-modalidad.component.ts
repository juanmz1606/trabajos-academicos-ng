import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ModalidadModel } from 'src/app/models/parameters/modalidad.model';
import { ModalidadService } from 'src/app/services/parameters/modalidad.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-modalidad',
  templateUrl: './eliminar-modalidad.component.html',
  styleUrls: ['./eliminar-modalidad.component.css']
})
export class EliminarModalidadComponent implements OnInit {

  id: number = 0;
  nombre: string = "";

  constructor(
    private router: Router,
    private service: ModalidadService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: ModalidadModel) => {
        if (data.id  && data.nombre) {
          this.id = data.id;
          this.nombre = data.nombre;
        }
      }
    });
  }

  RemoveRecord(){
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: ModalidadModel) => {
        OpenGeneralMessageModal(GeneralData.REMOVED_MESSAGE);
        this.router.navigate(["/parametros/listar-modalidad"]);
      },
      error: (err: any) =>{
        OpenGeneralMessageModal(GeneralData.ERROR_REMOVED_MESSAGE);
      }
    });
  }

}
