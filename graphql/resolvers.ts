import {resolversProyectos} from "../models/proyecto/resolvers";
import {resolversUsuarios} from "../models/usuarios/resolvers";
import { resolversAvance } from "../models/avance/resolvers";
// import {resolversInscripcion} from "../models/inscripcion/resolvers";

export const resolversGlobal = [resolversUsuarios,resolversProyectos,resolversAvance];
