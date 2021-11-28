import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parameters/departamento.model';
import { TipoVinculacionModel } from 'src/app/models/parameters/tipo-vinculacion.model';
import { ProponenteModel } from 'src/app/models/proponente/proponente.model';
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


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProponenteService,
    private tipoVinculacionService: TipoVinculacionService,
    private departamentoService: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
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
      otrosNombres: [""],
      primerApellido: ["", [Validators.required]],
      segundoApellido: ["", [Validators.required]],
      documento: ["", [Validators.required]],
      fechaNacimiento: ["", [Validators.required]],
      email: ["", [Validators.required]],
      celular: [""]
    });
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
    this.service.SaveRecord(model).subscribe({
      next: (data: ProponenteModel) => {
        OpenGeneralMessageModal(GeneralData.SAVED_MESSAGE);
        this.router.navigate(["/proponente/listar-proponente"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_SAVED_MESSAGE);
      }
    })

  }
}
