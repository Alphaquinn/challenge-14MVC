const {Model,DataTypes}=require('sequelize');
const sequelize = require('./cinfig/connection');
class POST extends Model{}
POST.init({
    ID:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    TITLE:{
        type:DataType.STRING,
        allowNull: false,
    },
    post_input:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    user_ID:{
type:DataTypes.INTEGER,
    }
});


module.exports=POST;