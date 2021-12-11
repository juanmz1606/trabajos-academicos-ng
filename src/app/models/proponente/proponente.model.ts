import { DepartamentoModel } from "../parameters/departamento.model";
import { TipoVinculacionModel } from "../parameters/tipo-vinculacion.model";
import { SolicitudModel } from "../solicitud/solicitud.model";

export class ProponenteModel{
    id?: number;
    primerNombre?: string;
    otrosNombres?: string;
    primerApellido?: string;
    segundoApellido?: string;
    documento?: string;
    fechaNacimiento?: string;
    email?: string;
    celular?: string;
    fotografia?: string;
    id_tipoVinculacion?: number;
    tiene_tipoVinculacion?: TipoVinculacionModel;
    departamentos?: DepartamentoModel[];
    solicitudes?: SolicitudModel[];
}