module.exports= (sequelize, dataTypes)=>{
    const Hobby = sequelize.define(
        'hobbies',{
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
        }, {tableName: 'hobbies', timestamps: false});
        return Hobby
 }