import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {

  _id: string = "";
  nombre: string = "";
  apellidos: string = "";
  documento: string = "";
  fechaNacimiento: string = "";
  correo: string = "";
  celular: string = "";

  constructor(
    private router: Router,
    private service: UsuarioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let _id = this.route.snapshot.params["_id"];
    this.service.SearchRecord(_id).subscribe({
      next: (data: UsuarioModel) => {
        
        if (data._id && data.nombre && data.apellidos
          && data.documento && data.fechaNacimiento && data.correo && data.celular) {
          this._id = data._id;
          this.nombre = data.nombre;
          this.apellidos = data.apellidos;
          this.documento = data.documento;
          this.fechaNacimiento = data.fechaNacimiento;
          this.correo = data.correo;
          this.celular = data.celular;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this._id).subscribe({
      next: (data: UsuarioModel) => {
        OpenGeneralMessageModal(GeneralData.REMOVED_MESSAGE);
        this.router.navigate(["/seguridad/listar-usuario"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_REMOVED_MESSAGE);
      }
    });
  }

}
