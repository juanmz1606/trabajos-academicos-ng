import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { RolModel } from 'src/app/models/rol/rol.model';
import { RolService } from 'src/app/services/rol/rol.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-editar-rol',
  templateUrl: './editar-rol.component.html',
  styleUrls: ['./editar-rol.component.css']
})
export class EditarRolComponent implements OnInit {

    form: FormGroup = new FormGroup({});
    url: string = GeneralData.BUSSINESS_URL;
    
    constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: RolService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.CreateForm();
    this.SearchRecord();
  }

  EditeRecord() {
    let model = new RolModel();
    model._id = this.form.controls['_id'].value;
    model.nombre = this.form.controls['nombre'].value;
    this.service.EditeRecord(model).subscribe({
      next: (data: RolModel) => {
        OpenGeneralMessageModal(GeneralData.SAVED_MESSAGE);
        this.router.navigate(["/seguridad/listar-rol"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_EDITED_MESSAGE);
      }
    });
  }
  CreateForm() {
    this.form = this.fb.group({
      _id: ["", [Validators.required]],
      nombre: ["", [Validators.required]],
    });
  }

  SearchRecord() {
    let _id = this.route.snapshot.params["_id"];
    this.service.SearchRecord(_id).subscribe({
      next: (data: RolModel) => {
        this.form.controls['_id'].setValue(data._id);
        this.form.controls['nombre'].setValue(data.nombre);
      }
    });
  }

}