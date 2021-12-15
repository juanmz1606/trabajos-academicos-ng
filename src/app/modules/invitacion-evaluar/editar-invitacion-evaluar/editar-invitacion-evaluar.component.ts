import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { InvitacionEvaluarModel } from 'src/app/models/invitacion-evaluar/invitacion-evaluar.model';
import { InvitacionEvaluarService } from 'src/app/services/invitacion-evaluar/invitacion-evaluar.service';


declare const OpenGeneralMessageModal: any;
@Component({
  selector: 'app-editar-invitacion-evaluar',
  templateUrl: './editar-invitacion-evaluar.component.html',
  styleUrls: ['./editar-invitacion-evaluar.component.css']
})
export class EditarInvitacionEvaluarComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  id = parseInt(this.route.snapshot.params["id"]);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: InvitacionEvaluarService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.SearchRecord();
  }

  CreateForm() {
    this.form = this.fb.group({
      id: ["", [Validators.required]],
      observaciones: ["", []]
    });
  }

  SearchRecord() {
    this.service.SearchRecord(this.id).subscribe({
      next: (data: InvitacionEvaluarModel) => {
        this.form.controls['id'].setValue(data.id);
        this.form.controls['observaciones'].setValue(data.observaciones);
      }
    });
  }

  EditeRecord() {
    let model = new InvitacionEvaluarModel();
    model.id = this.form.controls['id'].value;
    model.observaciones = this.form.controls['observaciones'].value;
    model.id_solicitud = 0;
    model.id_jurado = 0;
    model.fechaInvitacion = "01/01/2000";
    model.estadoInvitacion = "En espera";

    this.service.SearchRecord(this.id).subscribe({
      next: (data: InvitacionEvaluarModel) => {
        model.id_solicitud = data.id_solicitud;
        model.id_jurado = data.id_jurado;
        model.fechaInvitacion = data.fechaInvitacion;
        model.estadoInvitacion = data.estadoInvitacion;
      }
    });
    
    this.service.EditeRecord(model).subscribe({
      next: (data: InvitacionEvaluarModel) => {
        OpenGeneralMessageModal(GeneralData.EDITED_MESSAGE);
        this.router.navigate([`/invitacion-evaluar/info-invitacion-evaluar/{{this.id}}`]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_EDITED_MESSAGE);
      }
    });
  }

}
