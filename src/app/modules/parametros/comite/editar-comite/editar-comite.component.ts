import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ComiteModel } from 'src/app/models/parameters/comite.model';
import { ComiteService } from 'src/app/services/parameters/comite.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-editar-comite',
  templateUrl: './editar-comite.component.html',
  styleUrls: ['./editar-comite.component.css']
})
export class EditarComiteComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ComiteService,
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
      next: (data: ComiteModel) => {
        this.form.controls['id'].setValue(data.id);
        this.form.controls['nombre'].setValue(data.nombre);
      }
    });
  }

  EditeRecord(){
    let model = new ComiteModel();
    model.id = this.form.controls['id'].value;
    model.nombre = this.form.controls['nombre'].value;
    this.service.EditeRecord(model).subscribe({
      next: (data: ComiteModel) => {
        OpenGeneralMessageModal(GeneralData.EDITED_MESSAGE);
        this.router.navigate(["/parametros/listar-comite"]);
      },
      error: (err: any) =>{
        OpenGeneralMessageModal(GeneralData.ERROR_EDITED_MESSAGE);
      }
    });
  }

}
