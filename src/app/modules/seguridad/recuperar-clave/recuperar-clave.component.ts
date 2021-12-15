import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { RecuperarClaveModel } from 'src/app/models/recuperar-clave.model';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { SeguridadService } from 'src/app/services/compartido/seguridad.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm(){
    this.form = this.fb.group({
      correo: ["", [Validators.required]]
    });
  }

  RecuperarClave(){
    if(this.form.invalid){
      OpenGeneralMessageModal(GeneralData.INVALID_FORM_MESSAGE)
    }else{
      let modelo = new RecuperarClaveModel();
      modelo.correo = this.GetForm['correo'].value;
      

      this.servicioSeguridad.RecuperarClave(modelo).subscribe({
        next: (data: UsuarioModel) => {
          if (data == null) {
            this.router.navigate(["/seguridad/login"]);
            OpenGeneralMessageModal(GeneralData.NO_USER_MESSAGE);
          }
          else{
            this.router.navigate(["/seguridad/login"])
            OpenGeneralMessageModal(GeneralData.USER_MESSAGE);
          }
        },
        error: (error: any) => {
          OpenGeneralMessageModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      });
    }
  }

  get GetForm(){
    return this.form.controls;
  }

}
