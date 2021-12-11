import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ModalidadModel } from 'src/app/models/parameters/modalidad.model';
import { ModalidadService } from 'src/app/services/parameters/modalidad.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-editar-modalidad',
  templateUrl: './editar-modalidad.component.html',
  styleUrls: ['./editar-modalidad.component.css']
})
export class EditarModalidadComponent implements OnInit {

    form: FormGroup = new FormGroup({});
    url: string = GeneralData.BUSSINESS_URL;
    
    constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ModalidadService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.SearchRecord();
  }

  CreateForm() {
    this.form = this.fb.group({
      id: ["", [Validators.required]],
      nombre: ["", [Validators.required]],
    });
  }

  SearchRecord() {
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: ModalidadModel) => {
        this.form.controls['id'].setValue(data.id);
        this.form.controls['nombre'].setValue(data.nombre);
      }
    });
  }

  EditeRecord() {
    let model = new ModalidadModel();
    model.id = this.form.controls['id'].value;
    model.nombre = this.form.controls['nombre'].value;
    this.service.EditeRecord(model).subscribe({
      next: (data: ModalidadModel) => {
        OpenGeneralMessageModal(GeneralData.EDITED_MESSAGE);
        this.router.navigate(["/parametros/listar-modalidad"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_EDITED_MESSAGE);
      }
    });
  }
  

  

}
