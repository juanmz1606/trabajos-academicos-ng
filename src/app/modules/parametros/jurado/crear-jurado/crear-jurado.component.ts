import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/models/parameters/jurado.model';
import { JuradoService } from 'src/app/services/parameters/jurado.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-crear-jurado',
  templateUrl: './crear-jurado.component.html',
  styleUrls: ['./crear-jurado.component.css']
})
export class CrearJuradoComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: JuradoService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm(){
    this.form = this.fb.group({
      nombre: ["", [Validators.required]],
      telefono: ["", []],
      email: ["", [Validators.required]],
      entidad: ["", [Validators.required]]
    });
  }

  SaveRecord(){
    let model = new JuradoModel();
    model.nombre = this.form.controls['nombre'].value;
    model.telefono = this.form.controls['telefono'].value;
    model.email = this.form.controls['email'].value;
    model.entidad = this.form.controls['entidad'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: JuradoModel) => {
        OpenGeneralMessageModal(GeneralData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-jurado"]);
      },
      error: (err: any) =>{
        OpenGeneralMessageModal(GeneralData.ERROR_SAVED_MESSAGE);
      }
    })

  }

}
