import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parameters/departamento.model';
import { FacultadModel } from 'src/app/models/parameters/facultad.model';
import { DepartamentoService } from 'src/app/services/parameters/departamento.service';
import { FacultadService } from 'src/app/services/parameters/facultad.service';

declare const OpenGeneralMessageModal: any;
declare const initSelectById: any;

@Component({
  selector: 'app-crear-departamento',
  templateUrl: './crear-departamento.component.html',
  styleUrls: ['./crear-departamento.component.css']
})
export class CrearDepartamentoComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  facultadList: FacultadModel[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DepartamentoService,
    private facultadService: FacultadService,
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.GetOptionsToSelects();
  }

  CreateForm(){
    this.form = this.fb.group({
      nombre: ["", [Validators.required]],
      facultad: [[Validators.required]]
    });
  }

  GetOptionsToSelects() {
    this.facultadService.GetRecordList().subscribe(
      {
        next: (data: FacultadModel[]) => {
          this.facultadList = data;
          setTimeout(() => {
            initSelectById("selFacultad");
          }, 100)
        }
      }
    );
  }

  SaveRecord(){
    let model = new DepartamentoModel();
    model.nombre = this.form.controls['nombre'].value;
    model.id_facultad = parseInt(this.form.controls['facultad'].value)
    this.service.SaveRecord(model).subscribe({
      next: (data: DepartamentoModel) => {
        OpenGeneralMessageModal(GeneralData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-departamento"]);
      },
      error: (err: any) =>{
        OpenGeneralMessageModal(GeneralData.ERROR_SAVED_MESSAGE);
      }
    })

  }

}
