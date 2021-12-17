

module.exports= (sequelize, dataTypes)=>{
   const Usuario = sequelize.define(
       'Usuario',{
           id:{
               type: dataTypes.INTEGER,
               primaryKey: true,
               autoIncrement: true,
               allowNull: false
           },
           nombre:{
            type: dataTypes.STRING,
            allowNull: false
           },
           apellido:{
            type: dataTypes.STRING,
            allowNull: false
           },
           direccion:{
            type: dataTypes.STRING,
            allowNull: false
           }
       }, {tableName: 'users', timestamps: false});

       Usuario.associate = (models)=>{
        Usuario.belongsTo(models.loginUser,{
            as:'login',foreignKey:'users_id'
        })
       }
       
       return Usuario
}