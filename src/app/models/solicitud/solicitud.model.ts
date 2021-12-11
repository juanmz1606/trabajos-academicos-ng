import { InvitacionEvaluarModel } from "../invitacion-evaluar/invitacion-evaluar.model";
import { ComiteModel } from "../parameters/comite.model";
import { EstadoSolicitudModel } from "../parameters/estado-solicitud.model";
import { LineaInvestigacionModel } from "../parameters/lineaInvestigacion.model";
import { ModalidadModel } from "../parameters/modalidad.model";
import { TipoSolicitudModel } from "../parameters/tipo-solicitud.model";
import { ProponenteModel } from "../proponente/proponente.model";

export class SolicitudModel{
    id?: number;
    fecha?: string;
    nombreTrabajo?: string;
    archivo?: string;
    descripcion?:string;
    proponentes?: ProponenteModel[];
    id_modalidad?: number;
    tiene_modalidad?: ModalidadModel;
    id_tipoSolicitud?: number;
    tiene_tipoSolicitud?: TipoSolicitudModel;
    id_estadoSolicitud?: number;
    tiene_estadoSolicitud?: EstadoSolicitudModel;
    id_lineaInvestigacion?: number;
    tiene_lineaInvestigacion?: LineaInvestigacionModel;
    comites?: ComiteModel[];
    invitacionesEvaluar?: InvitacionEvaluarModel[];
}