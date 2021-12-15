import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { InvitacionEvaluarModel } from 'src/app/models/invitacion-evaluar/invitacion-evaluar.model';
import { JuradoModel } from 'src/app/models/parameters/jurado.model';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';
import { InvitacionEvaluarService } from 'src/app/services/invitacion-evaluar/invitacion-evaluar.service';
import { JuradoService } from 'src/app/services/parameters/jurado.service';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-invitacion-evaluar',
  templateUrl: './eliminar-invitacion-evaluar.component.html',
  styleUrls: ['./eliminar-invitacion-evaluar.component.css']
})
export class EliminarInvitacionEvaluarComponent implements OnInit {
  id: number = parseInt(this.route.snapshot.params["id"]);;
  fechaInvitacion: string = "";
  fechaRespuesta: any;
  estadoInvitacion: string = "";
  observaciones: any;
  solicitudList: SolicitudModel[] = [];
  tiene_solicitud: any;
  juradoList: JuradoModel[] = [];
  tiene_jurado: any;

  constructor(
    private router: Router,
    private service: InvitacionEvaluarService,
    private route: ActivatedRoute,
    private solicitudService: SolicitudService,
    private juradoService: JuradoService
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    this.service.SearchRecord(this.id).subscribe({
      next: (data: InvitacionEvaluarModel) => {
        
        if (data.id && data.fechaInvitacion && data.estadoInvitacion) 
        {
          this.id = data.id;
          this.fechaInvitacion = data.fechaInvitacion;
          this.estadoInvitacion = data.estadoInvitacion;
          this.observaciones = data.observaciones;
          this.fechaRespuesta = data.fechaRespuesta;

          this.solicitudService.GetRecordList().subscribe(
            {
              next: (solicitudes: SolicitudModel[]) => {
                this.solicitudList = solicitudes;
                this.solicitudList.forEach(solicitud=> {
                  if (solicitud.id == data.id_solicitud) {
                    this.tiene_solicitud = solicitud.nombreTrabajo
                  }
                });
              }
            }
          );
          this.juradoService.GetRecordList().subscribe(
            {
              next: (jurados: JuradoModel[]) => {
                this.juradoList = jurados;
                this.juradoList.forEach(jurado => {
                  if (jurado.id == data.id_jurado) {
                    this.tiene_jurado = jurado.nombre
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
        this.router.navigate([`/invitacion-evaluar/listar-invitacion-evaluar/${this.id}`]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_REMOVED_MESSAGE);
      }
    });
  }

}
