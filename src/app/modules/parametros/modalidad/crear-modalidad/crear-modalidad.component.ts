import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ModalidadModel } from 'src/app/models/parameters/modalidad.model';
import { ModalidadService } from 'src/app/services/parameters/modalidad.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-crear-modalidad',
  templateUrl: './crear-modalidad.component.html',
  styleUrls: ['./crear-modalidad.component.css']
})
export class CrearModalidadComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ModalidadService
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
    let model = new ModalidadModel();
    model.nombre = this.form.controls['nombre'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: ModalidadModel) => {
        OpenGeneralMessageModal(GeneralData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-modalidad"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_SAVED_MESSAGE);
      }
    })

  }

}
