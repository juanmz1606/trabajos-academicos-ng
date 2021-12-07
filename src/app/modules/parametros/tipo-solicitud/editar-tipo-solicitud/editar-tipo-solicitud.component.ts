import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud.model';
import { UploadedFileModel } from 'src/app/models/uploaded-file.model';
import { TipoSolicitudService } from 'src/app/services/parameters/tipo-solicitud.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-editar-tipo-solicitud',
  templateUrl: './editar-tipo-solicitud.component.html',
  styleUrls: ['./editar-tipo-solicitud.component.css']
})
export class EditarTipoSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  formFile: FormGroup = new FormGroup({});
  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TipoSolicitudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.CreateFormFile();
    this.SearchRecord();
  }


  CreateForm() {
    this.form = this.fb.group({
      id: ["", [Validators.required]],
      nombre: ["", [Validators.required]],
      formato: ["", [Validators.required]]
    });
  }

  SearchRecord() {
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: TipoSolicitudModel) => {
        this.form.controls['id'].setValue(data.id);
        this.form.controls['nombre'].setValue(data.nombre);
        this.form.controls['formato'].setValue(data.formato);
      }
    });
  }

  CreateFormFile() {
    this.formFile = this.fb.group({
      file: ["", []]
    })
  }

  EditeRecord() {
    let model = new TipoSolicitudModel();
    model.id = this.form.controls['id'].value;
    model.nombre = this.form.controls['nombre'].value;
    model.formato = this.form.controls['formato'].value;
    this.service.EditeRecord(model).subscribe({
      next: (data: TipoSolicitudModel) => {
        OpenGeneralMessageModal(GeneralData.EDITED_MESSAGE);
        this.router.navigate(["/parametros/listar-tipo-solicitud"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_EDITED_MESSAGE);
      }
    });
  }

  OnchangeInputFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formFile.controls["file"].setValue(file);
    }
  }

  async UploadFormat() {
    const formData = new FormData();
    formData.append("file", this.formFile.controls["file"].value);
    this.service.UploadFile(formData).subscribe({
      next: (data: UploadedFileModel) => {
        this.form.controls["formato"].setValue(data.filename)
      }
    });
  }

}
