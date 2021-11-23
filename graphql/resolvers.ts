import { userModel } from "../models/user";

const resolvers = {
    Query:{
        Usuarios: async (parent,args) =>{
            const usuarios = await userModel.find();
            return usuarios;
        },
    },
    Mutation: {
        crearUsuario: async(parent,args)=>{
            const usuarioCreado= await userModel.create({
                nombre:args.nombre,
                apellido:args.apellido,
                identificacion:args.identificacion,
                correo:args.correo,
                rol:args.rol,
            });

            if(Object.keys(args).includes('estado')){
                usuarioCreado.estado=args.estado;
            }

            return usuarioCreado;
        },
        eliminarUsuario: async (parent,args) =>{
            const usuarioEliminado = await userModel.findOneAndDelete({_id:args._id});
            return usuarioEliminado;
        },
    },  
};
export {resolvers};