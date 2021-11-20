import { Schema,model } from "mongoose";

interface avances{
    fecha: Date;
    descripcion: string;
    observaciones: string;
}
const avanceSchema= new Schema<avances>({
    fecha:{
        type:Date,
        required:true,
    },
    descripcion:{
        type:String,
        required:true,
    },
    observaciones:{
        type:String,
        required:true,
    }
});
const avancesModel=model('Avances',avanceSchema,'ColeccionAvances');
export {avancesModel};