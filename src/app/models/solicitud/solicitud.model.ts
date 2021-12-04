import { InvitacionEvaluarModel } from "../invitacion-evaluar/invitacion-evaluar.model";
import { ComiteModel } from "../parameters/comite.model";
import { ProponenteModel } from "../proponente/proponente.model";

export class SolicitudModel{
    id?: number;
    fecha?: string;
    nombreTrabajo?: string;
    archivo?: string;
    descripcion?:string;
    proponentes?: ProponenteModel[];
    id_modalidad?: number;
    id_tipoSolicitud?: number;
    id_estadoSolicitud?: number;
    id_lineaInvestigacion?: number;
    comites?: ComiteModel[];
    invitacionesEvaluar?: InvitacionEvaluarModel[];
}