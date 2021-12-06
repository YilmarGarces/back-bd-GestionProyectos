import mongoose from 'mongoose'; 
const { Schema, model } = mongoose;

const tiposAutenticacion = gql`
type Mutation {
    Registro{
    _id:ID!
    nombre:String!
    apellido:String!
    identificacion:String!
    correo:String!
    estado:Enum_EstadoUsuario
    rol:Enum_Rol!
    }: String!

}  
`;
export {tiposAutenticacion};