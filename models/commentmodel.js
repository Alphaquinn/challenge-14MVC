const {Model,DataTypes}=require('sequelize');
const sequelize = require ('./config/connection');
class COMMENT extends Model{}
COMMENT.init({
    id:{ type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement: true,

},
comment_input:{
    type:DataTypes.STRING,
    allowNull:false,

},
user_ID:{
    type:DataTypes.INTEGER,
    
}
})