module.exports= (sequelize, dataTypes)=>{
    const Materia = sequelize.define(
        'materias',{
            id:{
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nombre:{
             type: dataTypes.STRING,
             allowNull: false
            }
        }, {tableName: 'materias', timestamps: false});
        return Materia
 }