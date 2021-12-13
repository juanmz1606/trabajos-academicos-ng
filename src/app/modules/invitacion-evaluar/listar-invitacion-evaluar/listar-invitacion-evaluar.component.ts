import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { InvitacionEvaluarModel } from 'src/app/models/invitacion-evaluar/invitacion-evaluar.model';
import { InvitacionEvaluarService } from 'src/app/services/invitacion-evaluar/invitacion-evaluar.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-listar-invitacion-evaluar',
  templateUrl: './listar-invitacion-evaluar.component.html',
  styleUrls: ['./listar-invitacion-evaluar.component.css']
})
export class ListarInvitacionEvaluarComponent implements OnInit {

  url: string = GeneralData.BUSSINESS_URL;
  id: number = parseInt(this.route.snapshot.params["id"]);
  
  invitacionEvaluarList: InvitacionEvaluarModel[] = [];

  constructor(
    private invitacionEvaluarService: InvitacionEvaluarService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.GetInvitacionEvaluarList()
  }

  GetInvitacionEvaluarList(){
    this.invitacionEvaluarService.SearchRecordByIdSolicitud(this.id).subscribe({
      next: (data: InvitacionEvaluarModel[]) => {
        this.invitacionEvaluarList = data;
      },
      error: (err:any)=>{
        OpenGeneralMessageModal(GeneralData.GENERAL_ERROR_MESSAGE);
      }
    })
  }

}
