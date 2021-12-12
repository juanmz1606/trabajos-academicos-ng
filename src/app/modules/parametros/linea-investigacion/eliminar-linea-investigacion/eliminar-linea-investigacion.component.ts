import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { LineaInvestigacionModel } from 'src/app/models/parameters/lineaInvestigacion.model';
import { LineaInvestigacionService } from 'src/app/services/parameters/linea-investigacion.service';

declare const OpenGeneralMessageModal: any;


@Component({
  selector: 'app-eliminar-linea-investigacion',
  templateUrl: './eliminar-linea-investigacion.component.html',
  styleUrls: ['./eliminar-linea-investigacion.component.css']
})
export class EliminarLineaInvestigacionComponent implements OnInit {
  id: number = 0;
  nombre: string = "";
  

  constructor(
    private router: Router,
    private service: LineaInvestigacionService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: LineaInvestigacionModel) => {
        
        if (data.id && data.nombre) {
          this.id = data.id;
          this.nombre = data.nombre;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: LineaInvestigacionModel) => {
        OpenGeneralMessageModal(GeneralData.REMOVED_MESSAGE);
        this.router.navigate(["/parametros/listar-linea-investigacion"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_REMOVED_MESSAGE);
      }
    });
  }
}
