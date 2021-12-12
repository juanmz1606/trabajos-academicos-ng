import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { LineaInvestigacionModel } from 'src/app/models/parameters/lineaInvestigacion.model';
import { LineaInvestigacionService } from 'src/app/services/parameters/linea-investigacion.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-crear-linea-investigacion',
  templateUrl: './crear-linea-investigacion.component.html',
  styleUrls: ['./crear-linea-investigacion.component.css']
})
export class CrearLineaInvestigacionComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: LineaInvestigacionService
    ) {}

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      nombre: ["", [Validators.required]],
    });
  }

  SaveRecord() {
    let model = new LineaInvestigacionModel();
    model.nombre = this.form.controls['nombre'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: LineaInvestigacionModel) => {
        OpenGeneralMessageModal(GeneralData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-linea-investigacion"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_SAVED_MESSAGE);
      }
    })

  }
}
