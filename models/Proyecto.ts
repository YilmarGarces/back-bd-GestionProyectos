import { Schema,model } from "mongoose";

interface Proyectos{
    nombre: string;
    presupuesto: float;
    fechaInicio: date;
    fechaFin: date;
    estado: inactivo;
    fase: ninguna;
}
const userSchema = new Schema<Proyect> (

)