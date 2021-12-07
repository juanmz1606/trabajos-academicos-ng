import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { TipoVinculacionModel } from 'src/app/models/parameters/tipo-vinculacion.model';
import { ProponenteModel } from 'src/app/models/proponente/proponente.model';
import { TipoVinculacionService } from 'src/app/services/parameters/tipo-vinculacion.service';
import { ProponenteService } from 'src/app/services/proponente/proponente.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-proponente',
  templateUrl: './eliminar-proponente.component.html',
  styleUrls: ['./eliminar-proponente.component.css']
})
export class EliminarProponenteComponent implements OnInit {

  id: number = 0;
  primerNombre: string = "";
  otrosNombres: string = "";
  primerApellido: string = "";
  segundoApellido: string = "";
  documento: string = "";
  fechaNacimiento: string = "";
  email: string = "";
  celular: any;
  fotografia: any;
  tiene_tipoVinculacion: any;
  tipoVinculacionList: TipoVinculacionModel[] = [];

  constructor(
    private router: Router,
    private service: ProponenteService,
    private route: ActivatedRoute,
    private tipoVinculacionService: TipoVinculacionService
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: ProponenteModel) => {
        
        if (data.id && data.primerNombre && data.otrosNombres && data.primerApellido && data.segundoApellido
          && data.documento && data.fechaNacimiento && data.email
        ) {
          this.id = data.id;
          this.primerNombre = data.primerNombre;
          this.otrosNombres = data.otrosNombres;
          this.primerApellido = data.primerApellido;
          this.segundoApellido = data.segundoApellido;
          this.documento = data.documento;
          this.fechaNacimiento = data.fechaNacimiento;
          this.email = data.email;
          this.celular = data.celular;
          this.fotografia = data.fotografia;

          this.tipoVinculacionService.GetRecordList().subscribe(
            {
              next: (tiposVinculacion: TipoVinculacionModel[]) => {
                this.tipoVinculacionList = tiposVinculacion;
                this.tipoVinculacionList.forEach(tipoVinculacion => {
                  if (tipoVinculacion.id == data.id_tipoVinculacion) {
                    this.tiene_tipoVinculacion = tipoVinculacion.nombre
                  }
                });
                
              }
            }
          );

        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: ProponenteModel) => {
        OpenGeneralMessageModal(GeneralData.REMOVED_MESSAGE);
        this.router.navigate(["/proponente/listar-proponente"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_REMOVED_MESSAGE);
      }
    });
  }

}
