module.exports= (sequelize, dataTypes)=>{
    const loginUser = sequelize.define(
        'loginUsers',{
            id:{
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            username:{
             type: dataTypes.STRING,
             allowNull: false
            },
            password:{
                type: dataTypes.STRING,
                allowNull: false
               }
        }, {tableName: 'loginUsers', timestamps: false});

        loginUser.associate = (models)=>{
            loginUser.hasOne(models.Usuario,{
                as:'usuarios',foreignKey:'users_id'
            })
           }
           
        return loginUser
 }