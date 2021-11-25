import { userModel } from "../models/user";
import {ProjectModel} from "../models/Proyecto";

const resolvers = {
    Query:{
        Usuarios: async (parent,args) =>{
            const usuarios = await userModel.find();
            return usuarios;
        },
        Usuario: async (parent,args) =>{
            const usuario= await userModel.findOne({_id:args._id});
            return usuario;
        },
        Proyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find().populate('lider');
            return proyectos;
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
        editarUsuario: async (parent,args) =>{
            const UsuarioEditado= await userModel.findByIdAndUpdate(args._id,{
                nombre:args.nombre,
                apellido:args.apellido,
                identificacion:args.identificacion,
                correo:args.correo,
                rol:args.rol,
                estado:args.estado,
            });
            return UsuarioEditado;
        },
        eliminarUsuario: async (parent,args) =>{
            if(Object.keys(args).includes('_id')){
                const usuarioEliminado = await userModel.findOneAndDelete({_id:args._id});
                return usuarioEliminado;
            }else if(Object.keys(args).includes('correo')){
                const usuarioEliminado = await userModel.findOneAndDelete({correo:args.correo});
                return usuarioEliminado;
            }                    
        },
        crearProyecto: async (parent,args) =>{
            const proyectoCreado = await ProjectModel.create({
                nombre:args.nombre,
                presupuesto:args.presupuesto,
                fechaInicio:args.fechaInicio,
                fechaFin:args.fechaFin,
                fase:args.fase,
                estado:args.estado,
                // objetivos:args.objetivos,
                lider:args.lider,
            });
            return proyectoCreado;
        }
    },  
};
export {resolvers};