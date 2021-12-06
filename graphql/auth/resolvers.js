const resolversAutenticacion = {
    Mutation:{
        registro: async (parent, args)=> {
            return "usuario creado";

        },
    },
};

export {resolversAutenticacion};