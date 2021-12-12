import { JuradoModel } from "../parameters/jurado.model";
import { ResultadoEvaluacionModel } from "../parameters/resultado-evaluacion.model";
import { RecordatorioModel } from "../recordatorio/recordatorio.model";
import { SolicitudModel } from "../solicitud/solicitud.model";

export class InvitacionEvaluarModel{
    id?: number;
    fechaInvitacion?: string;
    fechaRespuesta?: string;
    estadoInvitacion?: string;
    observaciones?: string;
    id_solicitud?: number;
    tiene_solicitud?: SolicitudModel;
    id_jurado?: number;
    tiene_jurado?: JuradoModel;
    resultadosEvaluacion?: ResultadoEvaluacionModel[];
    recordatorios?: RecordatorioModel[];
}