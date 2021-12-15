import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { RolModel } from 'src/app/models/rol/rol.model';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { RolService } from 'src/app/services/rol/rol.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

declare const OpenGeneralMessageModal: any;
declare const initSelectById: any;

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  url: string = GeneralData.ADMIN_USERS_URL;
  rolList: RolModel[] = []
 


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UsuarioService,
    private rolService: RolService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.GetOptionsToSelects();
  }

  GetOptionsToSelects() {
    this.rolService.GetRecordList().subscribe({
      next: (data: RolModel[]) => {
        this.rolList = data;
        setTimeout(() => {
          initSelectById("selRoles");
        }, 100)
      }
    }
    );
  }

  CreateForm() {
    this.form = this.fb.group({
      nombre: ["", [Validators.required]],
      apellidos: ["", [Validators.required]],
      documento: ["", [Validators.required]],
      fechaNacimiento: ["", [Validators.required]],
      correo: ["", [Validators.required]],
      celular: ["", [Validators.required]],
      roles: ["", [Validators.required]]
      });
  }

  SaveRecord() {
    let model = new UsuarioModel();
    model.nombre = this.form.controls['nombre'].value;
    model.apellidos = this.form.controls['apellidos'].value;
    model.documento = this.form.controls['documento'].value;
    model.fechaNacimiento = this.form.controls['fechaNacimiento'].value;
    model.correo = this.form.controls['correo'].value;
    model.celular = this.form.controls['celular'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: UsuarioModel) => {
        OpenGeneralMessageModal(GeneralData.SAVED_MESSAGE);
        this.router.navigate(["/seguridad/listar-usuario"]);
      },
      error: (err: any) =>{
        OpenGeneralMessageModal(GeneralData.ERROR_SAVED_MESSAGE);
      }
    })
  }

}

