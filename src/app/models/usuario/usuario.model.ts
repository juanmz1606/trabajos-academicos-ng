import { RolModel } from "../rol/rol.model";

export class UsuarioModel {
    _id?: string;
    nombre?: string;
    apellidos?: string;
    documento?: string;
    fechaNacimiento?: string;
    correo?: string;
    celular?: string;
    estado?: boolean;
    clave?: string;
    roles?: RolModel[];
}