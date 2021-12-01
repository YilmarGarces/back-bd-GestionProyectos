import {resolversProyectos} from "../models/proyecto/resolvers.js";
import {resolversUsuarios} from "../models/usuarios/resolvers.js";
import { resolversAvance } from "../models/avance/resolvers.js";
import {resolverInscripciones} from "../models/inscripcion/resolvers.js";

export const resolversGlobal = [resolversUsuarios,resolversProyectos,resolversAvance,resolverInscripciones];
