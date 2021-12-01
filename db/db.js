import mongoose from "mongoose";

const conectarBD =async ()=>{
    return await mongoose.connect(process.env.DATABASE_URL)
    .then(()=> {
        console.log('conexion exitosa');
    })
    .catch((e)=>{
        console.error('fallas en conexion a BD',e);
    })
};
export default conectarBD;