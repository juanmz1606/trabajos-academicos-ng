import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ComiteModel } from 'src/app/models/parameters/comite.model';
import { ComiteService } from 'src/app/services/parameters/comite.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-comite',
  templateUrl: './eliminar-comite.component.html',
  styleUrls: ['./eliminar-comite.component.css']
})
export class EliminarComiteComponent implements OnInit {

  id: number = 0;
  nombre: string = "";

  constructor(
    private router: Router,
    private service: ComiteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: ComiteModel) => {
        if (data.id && data.nombre) {
          this.id = data.id;
          this.nombre = data.nombre;
        }
      }
    });
  }

  RemoveRecord(){
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: ComiteModel) => {
        OpenGeneralMessageModal(GeneralData.REMOVED_MESSAGE);
        this.router.navigate(["/parametros/listar-comite"]);
      },
      error: (err: any) =>{
        OpenGeneralMessageModal(GeneralData.ERROR_REMOVED_MESSAGE);
      }
    });
  }


}