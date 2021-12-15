import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { RolModel } from 'src/app/models/rol/rol.model';
import { RolService } from 'src/app/services/rol/rol.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-crear-rol',
  templateUrl: './crear-rol.component.html',
  styleUrls: ['./crear-rol.component.css']
})
export class CrearRolComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  url: string = GeneralData.ADMIN_USERS_URL;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: RolService
    ) {}

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      nombre: ["", [Validators.required]],
    });
  }

  SaveRecord() {
    let model = new RolModel();
    model.nombre = this.form.controls['nombre'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: RolModel) => {
        OpenGeneralMessageModal(GeneralData.SAVED_MESSAGE);
        this.router.navigate(["/seguridad/listar-rol"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_SAVED_MESSAGE);
      }
    })

  }

}
