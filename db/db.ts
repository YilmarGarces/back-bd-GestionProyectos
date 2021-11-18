import { connect } from "mongoose";

const conectarBD =async ()=>{
    return await connect('mongodb+srv://admin:adminproyectos@gestionproyectosmisiont.c9qs1.mongodb.net/GestionProyectosYilmar?retryWrites=true&w=majority')
    .then(()=> {
        console.log('conexion exitosa');
    })
    .catch(()=>{
        console.error('fallas en conexion');
    })
};
export default conectarBD;