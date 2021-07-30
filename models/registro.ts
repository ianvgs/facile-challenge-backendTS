'use strict';
import {Model} from 'sequelize';

interface RegistroAttributes {
  id: string;
  encripted_name:string
}
module.exports = (sequelize:any, DataTypes:any) => {

  class Registro extends Model<RegistroAttributes> 
  implements RegistroAttributes {    
   
    id!:string;
    encripted_name!:string;
    static associate(models:any) {     
    }
  };
  Registro.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    encripted_name:{
      type: DataTypes.STRING,
      allowNull:false
    } 
  }, {
    sequelize,
    modelName: 'Registro',
  });
  
  return Registro;
};