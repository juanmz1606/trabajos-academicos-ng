import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ComiteModel } from 'src/app/models/parameters/comite.model';
import { ComiteService } from 'src/app/services/parameters/comite.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-crear-comite',
  templateUrl: './crear-comite.component.html',
  styleUrls: ['./crear-comite.component.css']
})
export class CrearComiteComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ComiteService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm(){
    this.form = this.fb.group({
      nombre: ["", [Validators.required]]
    });
  }

  SaveRecord(){
    let model = new ComiteModel();
    model.nombre = this.form.controls['nombre'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: ComiteModel) => {
        OpenGeneralMessageModal(GeneralData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-comite"]);
      },
      error: (err: any) =>{
        OpenGeneralMessageModal(GeneralData.ERROR_SAVED_MESSAGE);
      }
    })

  }

}
