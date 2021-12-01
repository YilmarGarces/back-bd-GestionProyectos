import mongoose from 'mongoose'; 
import {ProjectModel} from "../proyecto/proyecto.js";
import {userModel} from "../usuarios/usuario.js";

const { Schema, model } = mongoose;

// interface inscripcion{
//     estado:Enum_EstadoInscripcion;
//     fechaIngreso:Date;
//     fechaEgreso:Date;
//     proyecto:Schema.Types.ObjectId;
//     estudiante:Schema.Types.ObjectId;
// }
const inscriptionSchema = new Schema({
    estado: {
      type: String,
      enum: ['ACEPTADO', 'RECHAZADO', 'PENDIENTE'],
      default: 'PENDIENTE',
      required: true,
    },
    fechaIngreso: {
      type: Date,
      required: false,
    },
    fechaEgreso: {
      type: Date,
      required: false,
    },
    proyecto: {
      type: Schema.Types.ObjectId,
      ref: ProjectModel,
      required: true,
    },
    estudiante: {
      type: Schema.Types.ObjectId,
      ref: userModel,
      required: true,
    },
  });
  
const inscriptionModel=model('Inscripcion',inscripcionSchema);
export {inscriptionModel};