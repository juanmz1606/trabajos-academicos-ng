import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parameters/departamento.model';
import { TipoVinculacionModel } from 'src/app/models/parameters/tipo-vinculacion.model';
import { ProponenteModel } from 'src/app/models/proponente/proponente.model';
import { UploadedFileModel } from 'src/app/models/proponente/uploaded-file.model';
import { DepartamentoService } from 'src/app/services/parameters/departamento.service';
import { TipoVinculacionService } from 'src/app/services/parameters/tipo-vinculacion.service';
import { ProponenteService } from 'src/app/services/proponente/proponente.service';

declare const OpenGeneralMessageModal: any;
declare const initSelectById: any;

@Component({
  selector: 'app-editar-proponente',
  templateUrl: './editar-proponente.component.html',
  styleUrls: ['./editar-proponente.component.css']
})
export class EditarProponenteComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  departamentosList: DepartamentoModel[] = [];
  tipoVinculacionList: TipoVinculacionModel[] = [];
  formFile: FormGroup = new FormGroup({});
  url: string = GeneralData.BUSSINESS_URL;
  uploadedFilename?: string = "";
  uploadedFile: boolean = false;
  actualImageName?: string = "";
  image: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProponenteService,
    private route: ActivatedRoute,
    private tipoVinculacionService: TipoVinculacionService,
    private departamentoService: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.CreateFormFile();
    this.SearchRecord();
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
      id: ["", [Validators.required]],
      primerNombre: ["", [Validators.required]],
      otrosNombres: ["", []],
      primerApellido: ["", [Validators.required]],
      segundoApellido: ["", [Validators.required]],
      documento: ["", [Validators.required]],
      fechaNacimiento: ["", [Validators.required]],
      email: ["", [Validators.required]],
      celular: ["", []],
      fotografia: ["", [Validators.required]],
      tipoVinculacion: [[Validators.required]]
    });
  }

  SearchRecord() {
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: ProponenteModel) => {
        if (data.fotografia != "") {
          this.actualImageName = data.fotografia;
          this.image = true;
        }
        this.form.controls['id'].setValue(data.id);
        this.form.controls['primerNombre'].setValue(data.primerNombre);
        this.form.controls['otrosNombres'].setValue(data.otrosNombres);
        this.form.controls['primerApellido'].setValue(data.primerApellido);
        this.form.controls['segundoApellido'].setValue(data.segundoApellido);
        this.form.controls['documento'].setValue(data.documento);
        this.form.controls['fechaNacimiento'].setValue(data.fechaNacimiento);
        this.form.controls['email'].setValue(data.email);
        this.form.controls['celular'].setValue(data.celular);
        this.form.controls['fotografia'].setValue(data.fotografia);
      }
    });
  }

  CreateFormFile() {
    this.formFile = this.fb.group({
      file: ["", []]
    })
  }

  EditeRecord() {
    let model = new ProponenteModel();
    model.id = this.form.controls['id'].value;
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
    this.service.EditeRecord(model).subscribe({
      next: (data: DepartamentoModel) => {
        OpenGeneralMessageModal(GeneralData.EDITED_MESSAGE);
        this.router.navigate(["/proponente/listar-proponente"]);
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

  async UploadImage() {
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
