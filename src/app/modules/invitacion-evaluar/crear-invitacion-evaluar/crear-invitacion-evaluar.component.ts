import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { InvitacionEvaluarModel } from 'src/app/models/invitacion-evaluar/invitacion-evaluar.model';
import { JuradoModel } from 'src/app/models/parameters/jurado.model';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';
import { InvitacionEvaluarService } from 'src/app/services/invitacion-evaluar/invitacion-evaluar.service';
import { JuradoService } from 'src/app/services/parameters/jurado.service';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';

declare const OpenGeneralMessageModal: any;
declare const initSelectById: any;

@Component({
  selector: 'app-crear-invitacion-evaluar',
  templateUrl: './crear-invitacion-evaluar.component.html',
  styleUrls: ['./crear-invitacion-evaluar.component.css']
})
export class CrearInvitacionEvaluarComponent implements OnInit {

  date: Date = new Date();
  id = parseInt(this.route.snapshot.params["id"]);
  form: FormGroup = new FormGroup({});
  solicitudList: SolicitudModel[] = [];
  juradoList: JuradoModel[] = [];
  url: string = GeneralData.BUSSINESS_URL;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: InvitacionEvaluarService,
    private solicitudService: SolicitudService,
    private juradoService: JuradoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.GetOptionsToSelects();
  }

  GetFecha(): string {
    if (this.date.getMonth() != 12) {
      return `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`
    }
    else {
      return `${this.date.getDate()}/01/${this.date.getFullYear()}`
    }
  }

  GetOptionsToSelects() {
    this.solicitudService.GetRecordList().subscribe({
      next: (data: SolicitudModel[]) => {
        this.solicitudList = data;
        setTimeout(() => {
          initSelectById("selSolicitud");
        }, 100)
      }
    }
    );

    this.juradoService.GetRecordList().subscribe({
      next: (data: JuradoModel[]) => {
        this.juradoList = data;
        setTimeout(() => {
          initSelectById("selJurado");
        }, 100)
      }
    }
    );
  }

  CreateForm() {
    this.form = this.fb.group({
      observaciones: ["", []],
      solicitud: ["", [Validators.required]],
      jurado: ["", [Validators.required]]
    });
  }

  SaveRecord() {
    let model = new InvitacionEvaluarModel();
    model.id_solicitud = parseInt(this.form.controls['solicitud'].value);
    model.id_jurado = parseInt(this.form.controls['jurado'].value);
    model.fechaInvitacion = this.GetFecha()
    model.estadoInvitacion = "En espera";
    model.observaciones = this.form.controls['observaciones'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: Boolean) => {
        if (data) {
          OpenGeneralMessageModal(GeneralData.SAVED_MESSAGE);
          this.router.navigate([`/invitacion-evaluar/listar-invitacion-evaluar/${this.id}`]);
        }
        else {
          OpenGeneralMessageModal(GeneralData.ERROR_SAVED_MESSAGE);
          this.router.navigate([`/invitacion-evaluar/listar-invitacion-evaluar/${this.id}`]);
        }
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_SAVED_MESSAGE);
      }
    })

  }

}

