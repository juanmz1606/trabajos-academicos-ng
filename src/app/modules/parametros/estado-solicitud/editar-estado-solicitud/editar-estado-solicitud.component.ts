import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { EstadoSolicitudModel } from 'src/app/models/parameters/estado-solicitud.model';
import { EstadoSolicitudService } from 'src/app/services/parameters/estado-solicitud.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-editar-estado-solicitud',
  templateUrl: './editar-estado-solicitud.component.html',
  styleUrls: ['./editar-estado-solicitud.component.css']
})
export class EditarEstadoSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: EstadoSolicitudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.SearchRecord();
  }

  CreateForm(){
    this.form = this.fb.group({
      id: ["", [Validators.required]],
      nombre: ["", [Validators.required]]
    });
  }

  SearchRecord(){
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: EstadoSolicitudModel) => {
        this.form.controls['id'].setValue(data.id);
        this.form.controls['nombre'].setValue(data.nombre);
      }
    });
  }

  EditeRecord(){
    let model = new EstadoSolicitudModel();
    model.id = this.form.controls['id'].value;
    model.nombre = this.form.controls['nombre'].value;
    this.service.EditeRecord(model).subscribe({
      next: (data: EstadoSolicitudModel) => {
        OpenGeneralMessageModal(GeneralData.EDITED_MESSAGE);
        this.router.navigate(["/parametros/listar-estado-solicitud"]);
      },
      error: (err: any) =>{
        OpenGeneralMessageModal(GeneralData.ERROR_EDITED_MESSAGE);
      }
    });
  }

}
