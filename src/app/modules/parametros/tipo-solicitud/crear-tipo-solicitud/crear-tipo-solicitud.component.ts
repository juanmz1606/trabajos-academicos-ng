import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud.model';
import { UploadedFileModel } from 'src/app/models/uploaded-file.model';
import { TipoSolicitudService } from 'src/app/services/parameters/tipo-solicitud.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-crear-tipo-solicitud',
  templateUrl: './crear-tipo-solicitud.component.html',
  styleUrls: ['./crear-tipo-solicitud.component.css']
})
export class CrearTipoSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  formFile: FormGroup = new FormGroup({});
  url: string = GeneralData.BUSSINESS_URL;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TipoSolicitudService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.CreateFormFile();
  }

  CreateForm() {
    this.form = this.fb.group({
      nombre: ["", [Validators.required]],
      formato: ["", [Validators.required]]
    });
  }

  CreateFormFile() {
    this.formFile = this.fb.group({
      file: ["", []]
    })
  }

  SaveRecord() {
    let model = new TipoSolicitudModel();
    model.nombre = this.form.controls['nombre'].value;
    model.formato = this.form.controls['formato'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: TipoSolicitudModel) => {
        OpenGeneralMessageModal(GeneralData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-tipo-solicitud"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_SAVED_MESSAGE);
      }
    })

  }

  OnchangeInputFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formFile.controls["file"].setValue(file);
    }
  }

  UploadFormat() {
    const formData = new FormData();
    formData.append("file", this.formFile.controls["file"].value);
    this.service.UploadFile(formData).subscribe({
      next: (data: UploadedFileModel) => {
        this.form.controls["formato"].setValue(data.filename)
      }
    });
  }

}
