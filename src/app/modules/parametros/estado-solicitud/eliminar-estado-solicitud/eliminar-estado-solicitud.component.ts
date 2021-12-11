import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { EstadoSolicitudModel } from 'src/app/models/parameters/estado-solicitud.model';
import { EstadoSolicitudService } from 'src/app/services/parameters/estado-solicitud.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-estado-solicitud',
  templateUrl: './eliminar-estado-solicitud.component.html',
  styleUrls: ['./eliminar-estado-solicitud.component.css']
})
export class EliminarEstadoSolicitudComponent implements OnInit {

  id: number = 0;
  nombre: string = "";

  constructor(
    private router: Router,
    private service: EstadoSolicitudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: EstadoSolicitudModel) => {
        if (data.id && data.nombre) {
          this.id = data.id;
          this.nombre = data.nombre;
        }
      }
    });
  }

  RemoveRecord(){
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: EstadoSolicitudModel) => {
        OpenGeneralMessageModal(GeneralData.REMOVED_MESSAGE);
        this.router.navigate(["/parametros/listar-estado-solicitud"]);
      },
      error: (err: any) =>{
        OpenGeneralMessageModal(GeneralData.ERROR_REMOVED_MESSAGE);
      }
    });
  }

}
