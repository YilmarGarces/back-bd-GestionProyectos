import { Schema,model } from "mongoose";
import {Enum_TipoObjetivo} from "./enum"

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
    }
});
const objetModel=model('Objetivo',objetSchema,'ColeccionObjetivos');
export {objetModel};

