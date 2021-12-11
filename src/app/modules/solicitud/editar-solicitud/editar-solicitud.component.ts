import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { InvitacionEvaluarModel } from 'src/app/models/invitacion-evaluar/invitacion-evaluar.model';
import { ComiteModel } from 'src/app/models/parameters/comite.model';
import { EstadoSolicitudModel } from 'src/app/models/parameters/estado-solicitud.model';
import { LineaInvestigacionModel } from 'src/app/models/parameters/lineaInvestigacion.model';
import { ModalidadModel } from 'src/app/models/parameters/modalidad.model';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud.model';
import { ProponenteModel } from 'src/app/models/proponente/proponente.model';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';
import { UploadedFileModel } from 'src/app/models/uploaded-file.model';
import { InvitacionEvaluarService } from 'src/app/services/invitacion-evaluar/invitacion-evaluar.service';
import { ComiteService } from 'src/app/services/parameters/comite.service';
import { EstadoSolicitudService } from 'src/app/services/parameters/estado-solicitud.service';
import { LineaInvestigacionService } from 'src/app/services/parameters/linea-investigacion.service';
import { ModalidadService } from 'src/app/services/parameters/modalidad.service';
import { TipoSolicitudService } from 'src/app/services/parameters/tipo-solicitud.service';
import { ProponenteService } from 'src/app/services/proponente/proponente.service';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';

declare const OpenGeneralMessageModal: any;
declare const initSelectById: any;

@Component({
  selector: 'app-editar-solicitud',
  templateUrl: './editar-solicitud.component.html',
  styleUrls: ['./editar-solicitud.component.css']
})
export class EditarSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  lineaInvestigacionList: LineaInvestigacionModel[] = [];
  tipoSolicitudList: TipoSolicitudModel[] = [];
  modalidadList: ModalidadModel[] = [];
  estadoSolicitudList: EstadoSolicitudModel[] = [];
  comiteList: ComiteModel[] = [];
  proponentesList: ProponenteModel[] = [];
  invitacionEvaluarList: InvitacionEvaluarModel[] = [];
  formFile: FormGroup = new FormGroup({});
  url: string = GeneralData.BUSSINESS_URL;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SolicitudService,
    private proponenteService: ProponenteService,
    private comiteService: ComiteService,
    private estadoSolicitudService: EstadoSolicitudService,
    private tipoSolicitudService: TipoSolicitudService,
    private lineaInvestigacionService: LineaInvestigacionService,
    private modalidadService: ModalidadService,
    private invitacionEvaluarService: InvitacionEvaluarService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.CreateFormFile();
    this.GetOptionsToSelects();
    this.SearchRecord();
  }

  GetOptionsToSelects() {
    this.proponenteService.GetRecordList().subscribe({
      next: (data: ProponenteModel[]) => {
        this.proponentesList = data;
        setTimeout(() => {
          initSelectById("selProponente");
        }, 100)
      }
    }
    );

    this.comiteService.GetRecordList().subscribe({
      next: (data: ComiteModel[]) => {
        this.comiteList = data;
        setTimeout(() => {
          initSelectById("selComites");
        }, 100)
      }
    }
    );

    this.estadoSolicitudService.GetRecordList().subscribe({
      next: (data: EstadoSolicitudModel[]) => {
        this.estadoSolicitudList = data;
        setTimeout(() => {
          initSelectById("selEstadoSolicitud");
        }, 100)
      }
    }
    );

    this.tipoSolicitudService.GetRecordList().subscribe({
      next: (data: TipoSolicitudModel[]) => {
        this.tipoSolicitudList = data;
        setTimeout(() => {
          initSelectById("selTipoSolicitud");
        }, 100)
      }
    }
    );

    this.lineaInvestigacionService.GetRecordList().subscribe({
      next: (data: LineaInvestigacionModel[]) => {
        this.lineaInvestigacionList = data;
        setTimeout(() => {
          initSelectById("selLineaInvestigacion");
        }, 100)
      }
    }
    );

    this.modalidadService.GetRecordList().subscribe({
      next: (data: ModalidadModel[]) => {
        this.modalidadList = data;
        setTimeout(() => {
          initSelectById("selModalidad");
        }, 100)
      }
    }
    );

    this.invitacionEvaluarService.GetRecordList().subscribe({
      next: (data: InvitacionEvaluarModel[]) => {
        this.invitacionEvaluarList = data;
        setTimeout(() => {
          initSelectById("selInvitacionEvaluar");
        }, 100)
      }
    }
    );
  }

  CreateForm() {
    this.form = this.fb.group({
      id: ["", [Validators.required]],
      archivo:["",[Validators.required]],
      fecha: ["", [Validators.required]],
      nombreTrabajo: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      proponentes: ["", [Validators.required]],
      modalidad: ["", [Validators.required]],
      tipoSolicitud: ["", [Validators.required]],
      estadoSolicitud: ["", [Validators.required]],
      lineaInvestigacion: ["", [Validators.required]],
      comites: ["", [Validators.required]],
      invitacionesEvaluar: [[Validators.required]]
    });
  }

  SearchRecord() {
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: SolicitudModel) => {
        this.form.controls['id'].setValue(data.id);
        this.form.controls['archivo'].setValue(data.archivo);
        this.form.controls['fecha'].setValue(data.fecha);
        this.form.controls['nombreTrabajo'].setValue(data.nombreTrabajo);
        this.form.controls['descripcion'].setValue(data.descripcion);
      }
    });
  }

  CreateFormFile() {
    this.formFile = this.fb.group({
      file: ["", []]
    })
  }

  EditeRecord() {
    let model = new SolicitudModel();
    model.id = this.form.controls['id'].value;
    model.archivo = this.form.controls['archivo'].value;
    model.fecha = this.form.controls['fecha'].value;
    model.nombreTrabajo = this.form.controls['nombreTrabajo'].value;
    model.descripcion = this.form.controls['descripcion'].value;
    model.id_modalidad = parseInt(this.form.controls['modalidad'].value);
    model.id_tipoSolicitud = parseInt(this.form.controls['tipoSolicitud'].value);
    model.id_estadoSolicitud = parseInt(this.form.controls['estadoSolicitud'].value);
    model.id_lineaInvestigacion = parseInt(this.form.controls['lineaInvestigacion'].value);
    this.service.EditeRecord(model).subscribe({
      next: (data:SolicitudModel) => {
        OpenGeneralMessageModal(GeneralData.EDITED_MESSAGE);
        this.router.navigate(["/solicitud/listar-solicitudes"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_EDITED_MESSAGE);
      }
    });
  }

  OnchangeInputFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formFile.controls["file"].setValue(file);
    }
  }

  UploadFormat() {
    const formData = new FormData();
    formData.append("file", this.formFile.controls["file"].value);
    this.service.UploadFile(formData).subscribe({
      next: (data: UploadedFileModel) => {
        this.form.controls["archivo"].setValue(data.filename)
      }
    });
  }

}
