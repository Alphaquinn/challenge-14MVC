const {Model,DataTypes}=require("sequelize");
const sequelize = require("./config/connection");


class USER extends Model{}

USER.init({
    ID: {
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement: true,
    },
    USERNAME:{
        type:DataType.STRING,
        allowNull:false,
        
    },
    EMAIL:{
        type:DataTypes.STRING,
        allowNull: false,
    }
});


module.exports=USER;



