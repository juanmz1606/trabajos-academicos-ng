import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parameters/departamento.model';
import { TipoVinculacionModel } from 'src/app/models/parameters/tipo-vinculacion.model';
import { ProponenteModel } from 'src/app/models/proponente/proponente.model';
import { UploadedFileModel } from 'src/app/models/uploaded-file.model';
import { DepartamentoService } from 'src/app/services/parameters/departamento.service';
import { TipoVinculacionService } from 'src/app/services/parameters/tipo-vinculacion.service';
import { ProponenteService } from 'src/app/services/proponente/proponente.service';

declare const OpenGeneralMessageModal: any;
declare const initSelectById: any;

@Component({
  selector: 'app-crear-proponente',
  templateUrl: './crear-proponente.component.html',
  styleUrls: ['./crear-proponente.component.css']
})
export class CrearProponenteComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  departamentosList: DepartamentoModel[] = [];
  tipoVinculacionList: TipoVinculacionModel[] = [];
  formFile: FormGroup = new FormGroup({});
  url: string = GeneralData.BUSSINESS_URL;
  uploadedFilename?: string = "";
  uploadedFile: boolean = false;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProponenteService,
    private tipoVinculacionService: TipoVinculacionService,
    private departamentoService: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.CreateFormFile();
    this.GetOptionsToSelects();
  }

  GetOptionsToSelects() {
    this.tipoVinculacionService.GetRecordList().subscribe(
      {
        next: (data: TipoVinculacionModel[]) => {
          this.tipoVinculacionList = data;
          setTimeout(() => {
            initSelectById("selTipoVinculacion");
          }, 100)
        }
      }
    );

    this.departamentoService.GetRecordList().subscribe(
      {
        next: (data: DepartamentoModel[]) => {
          this.departamentosList = data;
          setTimeout(() => {
            initSelectById("selDepartamentos");
          }, 100)

        }
      }
    );
  }

  CreateForm() {
    this.form = this.fb.group({
      primerNombre: ["", [Validators.required]],
      otrosNombres: ["", []],
      primerApellido: ["", [Validators.required]],
      segundoApellido: ["", [Validators.required]],
      documento: ["", [Validators.required]],
      fechaNacimiento: ["", [Validators.required]],
      email: ["", [Validators.required]],
      celular: ["", []],
      fotografia: ["", [Validators.required]],
      tipoVinculacion: [[Validators.required]],
      departamentos: [[Validators.required]]
    });
  }

  CreateFormFile() {
    this.formFile = this.fb.group({
      file: ["", []]
    })
  }

  ParsearDepartamentos(){
    let departamentos: number[] = []
    this.form.controls['departamentos'].value.forEach((element: any) => {
      departamentos.push(parseInt(element))
    });
    return departamentos
  }

  SaveRecord() {
    let model = new ProponenteModel();
    model.primerNombre = this.form.controls['primerNombre'].value;
    model.otrosNombres = this.form.controls['otrosNombres'].value;
    model.primerApellido = this.form.controls['primerApellido'].value;
    model.segundoApellido = this.form.controls['segundoApellido'].value;
    model.documento = this.form.controls['documento'].value;
    model.fechaNacimiento = this.form.controls['fechaNacimiento'].value;
    model.email = this.form.controls['email'].value;
    model.celular = this.form.controls['celular'].value;
    model.fotografia = this.form.controls['fotografia'].value;
    model.id_tipoVinculacion = parseInt(this.form.controls['tipoVinculacion'].value)
    this.service.SaveRecord(model).subscribe({
      next: (data: ProponenteModel) => {
        this.service.AsociarDepartamentos(data.id,this.ParsearDepartamentos())
        OpenGeneralMessageModal(GeneralData.SAVED_MESSAGE);
        this.router.navigate(["/proponente/listar-proponente"]);
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

  UploadImage() {
    const formData = new FormData();
    formData.append("file", this.formFile.controls["file"].value);
    this.service.UploadFile(formData).subscribe({
      next: (data: UploadedFileModel) => {
        this.form.controls["fotografia"].setValue(data.filename)
        this.uploadedFilename = data.filename;
        this.uploadedFile = true;
      }
    });
  }
}
