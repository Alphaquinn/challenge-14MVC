const sequelize = require('sequelize');
require('dotenv').config
let sequelize;
if(process.env.JAWSDB_URL){
    sequelize=new sequelize(process.send.JAWS_URL);
    }else {sequelize =new sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host:'localhost',
            dialect: 'mysql',
            port:3001
        }
    );}
    module.exports=sequelize 
