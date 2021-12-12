import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { LineaInvestigacionModel } from 'src/app/models/parameters/lineaInvestigacion.model';
import { LineaInvestigacionService } from 'src/app/services/parameters/linea-investigacion.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-editar-linea-investigacion',
  templateUrl: './editar-linea-investigacion.component.html',
  styleUrls: ['./editar-linea-investigacion.component.css']
})

export class EditarLineaInvestigacionComponent implements OnInit {

    form: FormGroup = new FormGroup({});
    url: string = GeneralData.BUSSINESS_URL;
    
    constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: LineaInvestigacionService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.SearchRecord();
  }

  CreateForm() {
    this.form = this.fb.group({
      id: ["", [Validators.required]],
      nombre: ["", [Validators.required]],
    });
  }

  SearchRecord() {
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: LineaInvestigacionModel) => {
        this.form.controls['id'].setValue(data.id);
        this.form.controls['nombre'].setValue(data.nombre);
      }
    });
  }

  EditeRecord() {
    let model = new LineaInvestigacionModel();
    model.id = this.form.controls['id'].value;
    model.nombre = this.form.controls['nombre'].value;
    this.service.EditeRecord(model).subscribe({
      next: (data: LineaInvestigacionModel) => {
        OpenGeneralMessageModal(GeneralData.EDITED_MESSAGE);
        this.router.navigate(["/parametros/listar-linea-investigacion"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_EDITED_MESSAGE);
      }
    });
  }
  

}
