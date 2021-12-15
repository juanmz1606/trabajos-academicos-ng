import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MD5 } from 'crypto-js';
import { GeneralData } from 'src/app/config/general-data';
import { CambioClaveModel } from 'src/app/models/cambio-clave.model';
import { SessionData } from 'src/app/models/session-data.model';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { SeguridadService } from 'src/app/services/compartido/seguridad.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent implements OnInit {

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
      contrasena: ["", [Validators.required,Validators.minLength(GeneralData.PASSWORD_MIN_LENGHT)]],
      nuevaContrasena: ["", [Validators.required, Validators.minLength(GeneralData.PASSWORD_MIN_LENGHT)]]
    });
  }

  CambiarClave(){
    if(this.form.invalid){
      OpenGeneralMessageModal(GeneralData.INVALID_FORM_MESSAGE)
    }else{
      let modelo = new CambioClaveModel();
      modelo.id_usuario = "";
      let data = localStorage.getItem("session-data");
      if (data) {
        let objectData: SessionData = JSON.parse(data);
        modelo.id_usuario = objectData.usuario?._id;
      }
      modelo.clave_actual = MD5(this.GetForm['contrasena'].value).toString();
      modelo.nueva_clave = MD5(this.GetForm['nuevaContrasena'].value).toString();

      console.log(modelo);
      

      this.servicioSeguridad.CambiarClave(modelo).subscribe({
        next: (data: UsuarioModel) => {
          if (data == null) {
            this.router.navigate(["/seguridad/cambiar-clave"]);
            OpenGeneralMessageModal(GeneralData.ERROR_CHANGE_PASSWORD_MESSAGE);
          }
          else{
            this.router.navigate(["/home"])
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
