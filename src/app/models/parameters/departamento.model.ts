import { FacultadModel } from "./facultad.model";

export class DepartamentoModel{
    id?: number;
    nombre?: string;
    id_facultad?: number;
    tiene_facultad?: FacultadModel;
}