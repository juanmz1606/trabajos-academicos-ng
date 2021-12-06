import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parameters/departamento.model';
import { FacultadModel } from 'src/app/models/parameters/facultad.model';
import { DepartamentoService } from 'src/app/services/parameters/departamento.service';
import { FacultadService } from 'src/app/services/parameters/facultad.service';

declare const OpenGeneralMessageModal: any;
declare const initSelectById: any;

@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css']
})
export class EditarDepartamentoComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  facultadList: FacultadModel[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DepartamentoService,
    private route: ActivatedRoute,
    private facultadService: FacultadService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.SearchRecord();
    this.GetOptionsToSelects();
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

  CreateForm(){
    this.form = this.fb.group({
      id: ["", [Validators.required]],
      nombre: ["", [Validators.required]],
      facultad: [[Validators.required]]
    });
  }

  SearchRecord(){
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: DepartamentoModel) => {
        this.form.controls['id'].setValue(data.id);
        this.form.controls['nombre'].setValue(data.nombre);
      }
    });
  }

  EditeRecord(){
    let model = new DepartamentoModel();
    model.id = this.form.controls['id'].value;
    model.nombre = this.form.controls['nombre'].value;
    model.id_facultad = parseInt(this.form.controls['facultad'].value)
    this.service.EditeRecord(model).subscribe({
      next: (data: DepartamentoModel) => {
        OpenGeneralMessageModal(GeneralData.EDITED_MESSAGE);
        this.router.navigate(["/parametros/listar-departamento"]);
      },
      error: (err: any) =>{
        OpenGeneralMessageModal(GeneralData.ERROR_EDITED_MESSAGE);
      }
    });
  }

}
