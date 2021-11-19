import { Schema,model } from "mongoose";
import {Enum_EstadoProyecto,Enum_FaseProyecto} from "./enum"

interface Proyecto{
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: Enum_EstadoProyecto;
    fase: Enum_FaseProyecto;
}
const projectSchema = new Schema<Proyecto> ({
    nombre: {
        type:String,
        required:true,
    },
    presupuesto:{
        type: Number,
        required:true,
    },
    fechaInicio:{
        type:Date,
        required:true,
    },
    fechaFin:{
        type:Date,
        required:true,
    },
    estado:{
        type:Date,
        required:true,
        default:Enum_EstadoProyecto.inactivo,
    },
    fase:{
        type:Date,
        required:true,
        default:Enum_FaseProyecto.nula,
    }

}
);

const ProjectModel=model('Proyecto',projectSchema,'ColeccionProyectos');
export {ProjectModel};