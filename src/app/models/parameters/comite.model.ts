import { SolicitudModel } from "../solicitud/solicitud.model";

export class ComiteModel{
    id?: number;
    nombre?: string;
    solicitudes?: SolicitudModel[];
}