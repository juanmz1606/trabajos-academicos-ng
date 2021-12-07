import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud.model';
import { TipoSolicitudService } from 'src/app/services/parameters/tipo-solicitud.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-tipo-solicitud',
  templateUrl: './eliminar-tipo-solicitud.component.html',
  styleUrls: ['./eliminar-tipo-solicitud.component.css']
})
export class EliminarTipoSolicitudComponent implements OnInit {

  id: number = 0;
  nombre: string = "";
  formato: any;

  constructor(
    private router: Router,
    private service: TipoSolicitudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: TipoSolicitudModel) => {
        
        if (data.id && data.nombre) {
          this.id = data.id;
          this.nombre = data.nombre;
          this.formato = data.formato;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: TipoSolicitudModel) => {
        OpenGeneralMessageModal(GeneralData.REMOVED_MESSAGE);
        this.router.navigate(["/parametros/listar-tipo-solicitud"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_REMOVED_MESSAGE);
      }
    });
  }

}
