import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { EstadoSolicitudModel } from 'src/app/models/parameters/estado-solicitud.model';
import { LineaInvestigacionModel } from 'src/app/models/parameters/lineaInvestigacion.model';
import { ModalidadModel } from 'src/app/models/parameters/modalidad.model';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud.model';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';
import { EstadoSolicitudService } from 'src/app/services/parameters/estado-solicitud.service';
import { LineaInvestigacionService } from 'src/app/services/parameters/linea-investigacion.service';
import { ModalidadService } from 'src/app/services/parameters/modalidad.service';
import { TipoSolicitudService } from 'src/app/services/parameters/tipo-solicitud.service';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-solicitud',
  templateUrl: './eliminar-solicitud.component.html',
  styleUrls: ['./eliminar-solicitud.component.css']
})
export class EliminarSolicitudComponent implements OnInit {

  id: number = 0;
  fecha: string = "";
  nombreTrabajo: string = "";
  archivo: any;
  descripcion: string = "";
  tiene_lineaInvestigacion: any;
  lineaInvestigacionList: LineaInvestigacionModel[] = [];
  tiene_tipoSolicitud: any;
  tipoSolicitudList: TipoSolicitudModel[] = [];
  tiene_modalidad: any;
  modalidadList: ModalidadModel[] = [];
  tiene_estadoSolicitud: any;
  estadoSolicitudList: EstadoSolicitudModel[] = [];

  constructor(
    private router: Router,
    private service: SolicitudService,
    private route: ActivatedRoute,
    private lineaInvestigacionService: LineaInvestigacionService,
    private tipoSolicitudService: TipoSolicitudService,
    private modalidadService: ModalidadService,
    private estadoSolicitudService: EstadoSolicitudService
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: SolicitudModel) => {
        
        if (data.id && data.fecha && data.nombreTrabajo && data.descripcion) 
        {
          this.id = data.id;
          this.fecha = data.fecha;
          this.nombreTrabajo = data.nombreTrabajo;
          this.archivo = data.archivo;
          this.descripcion = data.descripcion;

          this.lineaInvestigacionService.GetRecordList().subscribe(
            {
              next: (lineasInvestigacion: LineaInvestigacionModel[]) => {
                this.lineaInvestigacionList = lineasInvestigacion;
                this.lineaInvestigacionList.forEach(lineaInvestigacion => {
                  if (lineaInvestigacion.id == data.id_lineaInvestigacion) {
                    this.tiene_lineaInvestigacion = lineaInvestigacion.nombre
                  }
                });
              }
            }
          );
          this.tipoSolicitudService.GetRecordList().subscribe(
            {
              next: (tiposSolicitud: TipoSolicitudModel[]) => {
                this.tipoSolicitudList = tiposSolicitud;
                this.tipoSolicitudList.forEach(tipoSolicitud => {
                  if (tipoSolicitud.id == data.id_tipoSolicitud) {
                    this.tiene_tipoSolicitud = tipoSolicitud.nombre
                  }
                });
              }
            }
          );
          this.modalidadService.GetRecordList().subscribe(
            {
              next: (modalidades: ModalidadModel[]) => {
                this.modalidadList = modalidades;
                this.modalidadList.forEach(modalidad => {
                  if (modalidad.id == data.id_modalidad) {
                    this.tiene_modalidad = modalidad.nombre
                  }
                });
              }
            }
          );
          this.estadoSolicitudService.GetRecordList().subscribe(
            {
              next: (estadosSolicitud: EstadoSolicitudModel[]) => {
                this.estadoSolicitudList = estadosSolicitud;
                this.estadoSolicitudList.forEach(estadoSolicitud => {
                  if (estadoSolicitud.id == data.id_estadoSolicitud) {
                    this.tiene_estadoSolicitud = estadoSolicitud.nombre
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
      next: (data: SolicitudModel) => {
        OpenGeneralMessageModal(GeneralData.REMOVED_MESSAGE);
        this.router.navigate(["/solicitud/listar-solicitudes"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_REMOVED_MESSAGE);
      }
    });
  }

}
