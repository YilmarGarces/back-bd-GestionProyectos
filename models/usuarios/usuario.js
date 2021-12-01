import mongoose from 'mongoose'; 
const { Schema, model } = mongoose;
// import {Enum_Rol,Enum_EstadoUsuario} from "../enums/enum.js";

// interface User {
//     correo: string;
//     identificacion: string;
//     nombre: string;
//     apellido: string;
//     rol: Enum_Rol;
//     estado:Enum_EstadoUsuario;
// }
const userSchema = new Schema ({
    correo: {
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:(email)=>{
                return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
            },
            message:'El formato del correo esta mal, rectificalo',
        },
    },
    identificacion: {
        type:String,
        required:true,
        unique:true,
    },
    nombre:{
        type:String,
        required:true,
    },
    apellido:{
        type:String,
        required:true,
    },
    rol: {
        type: String,
        required: true,
        enum: ['ESTUDIANTE', 'LIDER', 'ADMINISTRADOR'],
      },
      estado: {
        type: String,
        enum: ['PENDIENTE', 'AUTORIZADO', 'NO_AUTORIZADO'],
        default: 'PENDIENTE',
      },
});

userSchema.virtual('proyectosLiderados', {
    ref: 'Proyecto',
    localField: '_id',
    foreignField: 'lider',
  });
  
  userSchema.virtual('avancesCreados', {
    ref: 'Avance',
    localField: '_id',
    foreignField: 'creadoPor',
  });
  
  userSchema.virtual('inscripciones', {
    ref: 'Inscripcion',
    localField: '_id',
    foreignField: 'estudiante',
  });
const userModel =model("Usuario",userSchema);
export {userModel};