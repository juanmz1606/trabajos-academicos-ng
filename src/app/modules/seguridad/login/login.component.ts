import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/general-data';
import { ModeloCredencialesUsuario } from 'src/app/models/credenciales-usuario.model';
import {MD5} from 'crypto-js';
import { SeguridadService } from 'src/app/services/compartido/seguridad.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm(){
    this.form = this.fb.group({
      usuario: ["alejandra.1701914799@ucaldas.edu.co", [Validators.required, Validators.email, Validators.minLength(GeneralData.EMAIL_MIN_LENGHT)]],
      contrasena: ["i57WxSnMkr", [Validators.required, Validators.minLength(GeneralData.PASSWORD_MIN_LENGHT)]]
    });
  }

  Login(){
    if(this.form.invalid){
      OpenGeneralMessageModal(GeneralData.INVALID_FORM_MESSAGE)
    }else{
      OpenGeneralMessageModal(GeneralData.VALID_FORM_MESSAGE)
      let modelo = new ModeloCredencialesUsuario();
      modelo.usuario = this.GetForm['usuario'].value;
      modelo.contrasena = MD5(this.GetForm['contrasena'].value).toString();
      this.servicioSeguridad.Login(modelo).subscribe({
        next: (data: any) => {
          console.log(data);
          
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
