import mongoose from 'mongoose'; 
const { Schema, model } = mongoose;
import {Enum_TipoObjetivo} from "./enums/enum.js";
import {ProjectModel} from "./proyecto/proyecto.js"

// interface Objetivo{
//     descripcion: string;
//     tipo: Enum_TipoObjetivo;
// }
const objectiveSchema = new Schema({
    descripcion: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      enum: ['GENERAL', 'ESPECIFICO'],
      required: true,
    },
  });
const ObjectiveModel=model('Objectiv',objetSchema);
export {ObjectiveModel};

