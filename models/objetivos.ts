import { Schema,model } from "mongoose";
import {Enum_TipoObjetivo} from "./enum";
import {ProjectModel} from "./Proyecto"

interface Objetivo{
    descripcion: string;
    tipo: Enum_TipoObjetivo;
}
const objetSchema=new Schema<Objetivo>({
    descripcion:{
        type:String,
        required:true,
    },
    tipo:{
        type:String,
        enum:Enum_TipoObjetivo,
        required:true,
    }

});
const ObjectiveModel=model('Objectiv',objetSchema);
export {ObjectiveModel};

