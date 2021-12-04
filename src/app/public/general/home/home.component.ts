import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url: string = GeneralData.BUSSINESS_URL;
  solicitudList: SolicitudModel[] = [];

  constructor(private solicitudService: SolicitudService) { }

  ngOnInit(): void {
    this.GetSolicitudList()
  }

  GetSolicitudList(){
    this.solicitudService.GetRecordList().subscribe({
      next: (data: SolicitudModel[]) => {
        this.solicitudList = data;
      },
      error: (err:any)=>{
        OpenGeneralMessageModal(GeneralData.GENERAL_ERROR_MESSAGE);
      }
    })
  }

}
