import { UsuarioModel } from "../usuario/usuario.model";

export class RolModel{
    _id?:string;
    nombre?: string;
    usuarios?:UsuarioModel[];
}