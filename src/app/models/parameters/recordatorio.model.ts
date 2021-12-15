import { InvitacionEvaluarModel } from "../invitacion-evaluar/invitacion-evaluar.model";

export class RecordatorioModel{
    id?: number;
    fecha?: string;
    hora?: string;
    tipoRecordatorio?: string;
    descripcion?: string;
    id_invitacionEvaluar?: number;
    tiene_invitacionEvaluar?: InvitacionEvaluarModel;
}