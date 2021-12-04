import { ResultadoEvaluacionModel } from "../parameters/resultado-evaluacion.model";
import { RecordatorioModel } from "../recordatorio/recordatorio.model";

export class InvitacionEvaluarModel{
    id?: number;
    fechaInvitacion?: string;
    fechaRespuesta?: string;
    estadoInvitacion?: string;
    observaciones?: string;
    id_solicitud?: number;
    id_jurado?: number;
    resultadosEvaluacion?: ResultadoEvaluacionModel[];
    recordatorios?: RecordatorioModel[];
}