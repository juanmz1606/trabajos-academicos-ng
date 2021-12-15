import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { RecordatorioModel } from 'src/app/models/recordatorio/recordatorio.model';
import { RecordatorioService } from 'src/app/services/recordatorio/recordatorio.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-crear-recordatorio',
  templateUrl: './crear-recordatorio.component.html',
  styleUrls: ['./crear-recordatorio.component.css']
})
export class CrearRecordatorioComponent implements OnInit {



  date: Date = new Date();
  id = parseInt(this.route.snapshot.params["id"]);
  form: FormGroup = new FormGroup({});
  url: string = GeneralData.BUSSINESS_URL;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: RecordatorioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  GetFecha(): string {
    if (this.date.getMonth() != 12) {
      return `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`
    }
    else {
      return `${this.date.getDate()}/01/${this.date.getFullYear()}`
    }
  }

  CreateForm() {
    this.form = this.fb.group({
      tipoRecordatorio: ["", [Validators.required]],
      descripcion: ["", [Validators.required]]
    });
  }

  SaveRecord() {
    let model = new RecordatorioModel();
    model.tipoRecordatorio = this.form.controls['tipoRecordatorio'].value;
    model.descripcion = this.form.controls['descripcion'].value;
    model.id_invitacionEvaluar = this.id;
    model.fecha = this.GetFecha();
    model.hora = this.date.getHours().toString();
    this.service.SaveRecord(model).subscribe({
      next: (data: RecordatorioModel) => {
          OpenGeneralMessageModal(GeneralData.SAVED_MESSAGE);
          this.router.navigate([`/invitacion-evaluar/info-invitacion-evaluar/${this.id}`]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_SAVED_MESSAGE);
      }
    })

  }

}
