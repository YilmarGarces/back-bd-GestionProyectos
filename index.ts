import conectarBD from "./db/db";
import {userModel} from "./models/user";
import {ProjectModel} from "./models/Proyecto";
import {Enum_Rol,Enum_EstadoUsuario} from "./models/enum";

const main=async() =>{
    await conectarBD();
    // CRUD PROYECTOS
    ProjectModel.create({
        nombre:"Proyecto 1",
        presupuesto:120,
        fechaInicio:Date.now(),
        fechaFin: new Date("2022/11/10"),
    })
}
main();

// CRUD USUARIOS
//    await userModel.create({
//         correo: 'micorreo@algo.com',
//         identificacion: '113',
//         nombre: 'Julian',
//         apellido: 'Lopez',
//         rol:Enum_Rol.administrador,        
//     }).then((u)=>{
//         console.log('usuario creado',u);
//     }).catch((e=>{
//         console.error('error creando el usuario',e);
//     }));

    // codigo para realizar consulta a base de datos y traer todos los usuarios existentes
    // await userModel.find().then(u=>{
    //     console.log("usuarios",u);
    // }).catch(e=>{
    //     console.error("error obteniendo los usuarios",e);
    // });

    // consulta a base de datos para obtener un dato de un usuario en especifico
    // await userModel.findOne({identificacion:'1234567'}).then(u=>{
    //     console.log("usuarios encontrado ",u);
    // }).catch(e=>{
    //     console.error("error obteniendo el usuario",e);
    // });

    // codigo para editar usuarios
    // await userModel.findOneAndUpdate(
    //     {correo:'asdfg@gg.com'},
    //     {nombre:'Julian',
    //     apellido:'Lopez'
    //     }
    //     );
    
    //Eliminar un usuario
    // await userModel.findOneAndDelete({correo:'asdfg@gg.com'}).then((u)=>{
    //     console.log('usuario eliminado con exito',u);
    // }).catch((e=>{
    //     console.error('error eliminando el usuario',e);
    // }));