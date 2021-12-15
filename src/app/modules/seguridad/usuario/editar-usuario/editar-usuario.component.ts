import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { RolModel } from 'src/app/models/rol/rol.model';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { RolService } from 'src/app/services/rol/rol.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

declare const OpenGeneralMessageModal: any;
declare const initSelectById: any;

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  url: string = GeneralData.ADMIN_USERS_URL;
  rolList: RolModel[] = []
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UsuarioService,
    private route: ActivatedRoute,
    private rolService: RolService
    
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.SearchRecord();
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
      _id: ["", [Validators.required]],
      nombre: ["", [Validators.required]],
      apellidos: ["", [Validators.required]],
      documento: ["", [Validators.required]],
      fechaNacimiento: ["", [Validators.required]],
      correo: ["", [Validators.required]],
      celular: ["", [Validators.required]],
      roles: ["", [Validators.required]]
    });
  }

  SearchRecord() {
    let _id = this.route.snapshot.params["_id"];
    this.service.SearchRecord(_id).subscribe({
      next: (data: UsuarioModel) => {
        this.form.controls['_id'].setValue(data._id);
        this.form.controls['nombre'].setValue(data.nombre);
        this.form.controls['apellidos'].setValue(data.apellidos);
        this.form.controls['documento'].setValue(data.documento);
        this.form.controls['fechaNacimiento'].setValue(data.fechaNacimiento);
        this.form.controls['correo'].setValue(data.correo);
        this.form.controls['celular'].setValue(data.celular);
      }
    });
  }

  

  EditeRecord() {
    let model = new UsuarioModel();
    model._id = this.form.controls['_id'].value;
    model.nombre = this.form.controls['nombre'].value;
    model.apellidos = this.form.controls['apellidos'].value;
    model.documento = this.form.controls['documento'].value;
    model.fechaNacimiento = this.form.controls['fechaNacimiento'].value;
    model.correo = this.form.controls['correo'].value;
    model.celular = this.form.controls['celular'].value;
    this.service.EditeRecord(model).subscribe({
      next: (data: UsuarioModel) => {
        OpenGeneralMessageModal(GeneralData.EDITED_MESSAGE);
        this.router.navigate(["/seguridad/listar-usuario"]);
      },
      error: (err: any) =>{
        OpenGeneralMessageModal(GeneralData.ERROR_EDITED_MESSAGE);
      }
    });
  }

}
