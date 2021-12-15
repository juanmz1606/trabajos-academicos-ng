import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/models/parameters/jurado.model';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { JuradoService } from 'src/app/services/parameters/jurado.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-crear-usuario-jurado',
  templateUrl: './crear-usuario-jurado.component.html',
  styleUrls: ['./crear-usuario-jurado.component.css']
})
export class CrearUsuarioJuradoComponent implements OnInit {

  id = parseInt(this.route.snapshot.params["id"]);
  usuarioList: UsuarioModel[] = [];
  jurado: JuradoModel = new JuradoModel();
  creado: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: JuradoService,
    private usuarioService: UsuarioService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.GetUsuarios();
    this.SearchJurado();
  }

  GetUsuarios() {
    this.usuarioService.GetRecordList().subscribe({
      next: (data: UsuarioModel[]) => {
        this.usuarioList = data;
        this.usuarioList.forEach(usuario => {
          if (usuario.correo == this.jurado.email) {
            OpenGeneralMessageModal(GeneralData.USUARIO_MESSAGE);
            this.router.navigate(["/seguridad/logout"]);
          }
          else {
            if (!this.creado) {
              this.creado = true
              OpenGeneralMessageModal(GeneralData.NO_USUARIO_MESSAGE);
              let usuario = new UsuarioModel()
              usuario.nombre = this.jurado.nombre,
                usuario.apellidos = "abcd",
                usuario.documento = "12345",
                usuario.fechaNacimiento = "01/01/2000",
                usuario.correo = this.jurado.email,
                usuario.celular = this.jurado.telefono
              this.usuarioService.SaveRecord(usuario).subscribe({
                next: (data: UsuarioModel) => {
                },
                error: (err: any) => {
                }
              })
              this.router.navigate(["/seguridad/logout"]);
            }

          }
        });
      }
    })
  }

  SearchJurado() {
    this.service.SearchRecord(this.id).subscribe({
      next: (data: JuradoModel) => {
        this.jurado = data;
      }
    })
  }

}
