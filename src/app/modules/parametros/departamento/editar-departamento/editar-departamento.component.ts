import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parameters/departamento.model';
import { DepartamentoService } from 'src/app/services/parameters/departamento.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css']
})
export class EditarDepartamentoComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DepartamentoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.SearchRecord();
  }

  CreateForm(){
    this.form = this.fb.group({
      id: ["", [Validators.required]],
      nombre: ["", [Validators.required]],
      id_facultad: ["", [Validators.required]]
    });
  }

  SearchRecord(){
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: DepartamentoModel) => {
        this.form.controls['id'].setValue(data.id);
        this.form.controls['nombre'].setValue(data.nombre);
        this.form.controls['id_facultad'].setValue(data.id_facultad);
      }
    });
  }

  EditeRecord(){
    let model = new DepartamentoModel();
    model.id = this.form.controls['id'].value;
    model.nombre = this.form.controls['nombre'].value;
    model.id_facultad = this.form.controls['id_facultad'].value;
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
