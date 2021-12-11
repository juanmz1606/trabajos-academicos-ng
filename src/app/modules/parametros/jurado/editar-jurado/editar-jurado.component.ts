import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/models/parameters/jurado.model';
import { JuradoService } from 'src/app/services/parameters/jurado.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-editar-jurado',
  templateUrl: './editar-jurado.component.html',
  styleUrls: ['./editar-jurado.component.css']
})
export class EditarJuradoComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: JuradoService,
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
      telefono: ["", []],
      email: ["", [Validators.required]],
      entidad: ["", [Validators.required]]
    });
  }

  SearchRecord(){
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: JuradoModel) => {
        this.form.controls['id'].setValue(data.id);
        this.form.controls['nombre'].setValue(data.nombre);
        this.form.controls['telefono'].setValue(data.telefono);
        this.form.controls['email'].setValue(data.email);
        this.form.controls['entidad'].setValue(data.entidad);
      }
    });
  }

  EditeRecord(){
    let model = new JuradoModel();
    model.id = this.form.controls['id'].value;
    model.nombre = this.form.controls['nombre'].value;
    model.telefono = this.form.controls['telefono'].value;
    model.email = this.form.controls['email'].value;
    model.entidad = this.form.controls['entidad'].value;
    this.service.EditeRecord(model).subscribe({
      next: (data: JuradoModel) => {
        OpenGeneralMessageModal(GeneralData.EDITED_MESSAGE);
        this.router.navigate(["/parametros/listar-jurado"]);
      },
      error: (err: any) =>{
        OpenGeneralMessageModal(GeneralData.ERROR_EDITED_MESSAGE);
      }
    });
  }
}