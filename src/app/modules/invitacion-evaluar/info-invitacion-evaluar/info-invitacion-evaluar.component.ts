import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvitacionEvaluarModel } from 'src/app/models/invitacion-evaluar/invitacion-evaluar.model';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';
import { InvitacionEvaluarService } from 'src/app/services/invitacion-evaluar/invitacion-evaluar.service';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';

@Component({
  selector: 'app-info-invitacion-evaluar',
  templateUrl: './info-invitacion-evaluar.component.html',
  styleUrls: ['./info-invitacion-evaluar.component.css']
})
export class InfoInvitacionEvaluarComponent implements OnInit {

  record: InvitacionEvaluarModel = new InvitacionEvaluarModel();
  solicitud: SolicitudModel = new SolicitudModel();

  constructor(
    private service: InvitacionEvaluarService,
    private solicitudService: SolicitudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.GetRecord();
  }

  GetSolicitud(id:number){
    this.solicitudService.SearchRecord(id).subscribe({
      next: (dataSolicitud: SolicitudModel) => {
        this.solicitud = dataSolicitud;
      }
    })
  }

  GetRecord(){
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: InvitacionEvaluarModel) => {
        if (data.id_solicitud){
          this.GetSolicitud(data.id_solicitud)
        }
        this.record = data;
      }
    })
  }


}
