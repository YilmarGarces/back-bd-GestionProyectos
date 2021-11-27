import conectarBD from "./db/db";
import {userModel} from "./models/usuarios/usuario";
import {ProjectModel} from "./models/proyecto/proyecto";
import {ObjectiveModel} from "./models/objetivos";
import {Enum_Rol,Enum_EstadoUsuario,Enum_TipoObjetivo} from "./models/enums/enum";
// metodologia de uno a muchos poniendo la atencion en la tabla que tiene el muchos #1 para bd relacionales
const crearProyectoConObjetivos1 =async () =>{
    const userini = await userModel.create({
        correo: 'micorreo@algo.com',
        identificacion: '113',
        nombre: 'Julian',
        apellido: 'Lopez',
        rol:Enum_Rol.administrador,        
        estado: Enum_EstadoUsuario.autorizado,
    });
    const proyectoCreado= await ProjectModel.create({
        nombre:'proyecto mision tic ciclo 4',
        fechaInicio:new Date('2021/11/20'),
        fechaFin:new Date('2022/11/21'),
        presupuesto:120000,
        lider:userini._id,
    });
    const objetioGeneral = await ObjectiveModel.create({
        descripcion: 'este es el objetivo general',
        tipo:Enum_TipoObjetivo.general,
        proyecto: proyectoCreado._id,
    });
    const objetioEspecifico1 = await ObjectiveModel.create({
        descripcion: 'este es el objetivo especifico 1',
        tipo:Enum_TipoObjetivo.especifico,
        proyecto: proyectoCreado._id,
    });
    const objetioEspecifico2 = await ObjectiveModel.create({
        descripcion: 'este es el objetivo especifico 2',
        tipo:Enum_TipoObjetivo.especifico,
        proyecto: proyectoCreado._id,
    });
    console.log('se creo el proyecto ',proyectoCreado);
};
const consultaProyectosConObjetivos1 =async () =>{
    const proyecto =await ProjectModel.findOne({ 
        _id:'61991f05e2fd5e722671027b' });
    const objetivos = await ObjectiveModel.find({project:'61991f05e2fd5e722671027b'});
    console.log('el proyecto que encontre fue: ',proyecto);
    console.log('y los objetivos son : ',objetivos)
};

// metodologia de uno a muchos poniendo la atencion en la tabla que tiene el 1 #2 para bd no relacionales
const crearProyectoConObjetivos2 =async () =>{
    const userini = await userModel.create({
        correo: 'micorreo@algo.com',
        identificacion: '113',
        nombre: 'Julian',
        apellido: 'Lopez',
        rol:Enum_Rol.administrador,        
        estado: Enum_EstadoUsuario.autorizado,
    });
    
    const objetioGeneral = await ObjectiveModel.create({
        descripcion: 'este es el objetivo general',
        tipo:Enum_TipoObjetivo.general,
    });
    const objetioEspecifico1 = await ObjectiveModel.create({
        descripcion: 'este es el objetivo especifico 1',
        tipo:Enum_TipoObjetivo.especifico,        
    });
    const objetioEspecifico2 = await ObjectiveModel.create({
        descripcion: 'este es el objetivo especifico 2',
        tipo:Enum_TipoObjetivo.especifico,
    });
    const proyectoCreado= await ProjectModel.create({
        nombre:'proyecto mision tic ciclo 4',
        fechaInicio:new Date('2021/11/20'),
        fechaFin:new Date('2022/11/21'),
        presupuesto:120000,
        lider:userini._id,
        objetivos: [
            objetioGeneral._id,
            objetioEspecifico1._id,
            objetioEspecifico2._id,
        ]
    });
    console.log('se creo el proyecto ',proyectoCreado);
};
const consultaProyectosConObjetivos2 =async () =>{
    const proyect = await ProjectModel.find ({id:'61992e550823531213fd6797'}).populate('lider').populate('objetivos');
    console.log('proyecto encontrado: ',JSON.stringify(proyect));
};
// metodologia uno a muchos cuando hay pocos registros en el lado que tiene el muchos #3 
const main=async() =>{
    await conectarBD();

    const userini = await userModel.create({
        correo: 'micorreo@algo.com',
        identificacion: '113',
        nombre: 'Julian',
        apellido: 'Lopez',
        rol:Enum_Rol.administrador,        
        estado: Enum_EstadoUsuario.autorizado,
    });
    const proyectoCreado= await ProjectModel.create({
        nombre:'proyecto mision tic ciclo 4',
        fechaInicio:new Date('2021/11/20'),
        fechaFin:new Date('2022/11/21'),
        presupuesto:120000,
        lider:userini._id,
        objetivos:[
            {descripcion:'este es el objetivo general', tipo:Enum_TipoObjetivo.general},
            {descripcion:'este es el objetivo especifico 1', tipo:Enum_TipoObjetivo.especifico},
            {descripcion:'este es el objetivo especifico 2', tipo:Enum_TipoObjetivo.especifico},
        ]
    });

}
main();



//codigo para realizar consulta a base de datos y traer todos los usuarios existentes
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
