import { Schema,model } from "mongoose";
import {Enum_EstadoInscripcion} from "./enum"

interface inscripcion{
    estado:Enum_EstadoInscripcion;
    fechaIngreso:Date;
    fechaEgreso:Date;
}
const inscripcionSchema = new Schema<inscripcion>({
    fechaIngreso:{
        type:Date,
        required:true,
    },
    fechaEgreso:{
        type:Date,
        required:true,
    },
    estado:{
        type:String,

    }
});