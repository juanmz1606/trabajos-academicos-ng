import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { RolModel } from 'src/app/models/rol/rol.model';
import { RolService } from 'src/app/services/rol/rol.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-rol',
  templateUrl: './eliminar-rol.component.html',
  styleUrls: ['./eliminar-rol.component.css']
})
export class EliminarRolComponent implements OnInit {

  _id: string = "";
  nombre: string = "";
  

  constructor(
    private router: Router,
    private service: RolService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let _id = this.route.snapshot.params["_id"];
    this.service.SearchRecord(_id).subscribe({
      next: (data: RolModel) => {
        
        if (data._id && data.nombre) {
          this._id = data._id;
          this.nombre = data.nombre;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this._id).subscribe({
      next: (data: RolModel) => {
        OpenGeneralMessageModal(GeneralData.REMOVED_MESSAGE);
        this.router.navigate(["/seguridad/listar-rol"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_REMOVED_MESSAGE);
      }
    });
  }
}