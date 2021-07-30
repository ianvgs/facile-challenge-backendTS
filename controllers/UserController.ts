import { Request, Response } from 'express'
import db  from '../models/'
import cryptr from'cryptr';
const crypt:any = new cryptr('facile');

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {  
    
    if (!req.params.id) {
        return res.status(200).json({message: "Informe um ID via params para realizar a consulta."})
    }       
    const resultados = await db.Registro.findOne({where:{
        id:req.params.id
    }});
    if (!resultados){
        return res.status(200).json({message:'Não foi encontrado registro com o id informado.'})    
    }    
    let encripted_name = await crypt.decrypt(resultados.dataValues.encripted_name) 
    let id = (resultados.dataValues.id)    
    return res.status(200).json({id,encripted_name})
            
  }

  public async store (req: Request, res: Response): Promise<Response> {
    console.log(req.body)
    if (!req.body.name) {
        return res.status(200).json({code:"E_VALIDATION_FAILURE", message: "O campo \"name\"é obrigatório."})
    }
     let hash = await crypt.encrypt(req.body.name);
     let createdAt =  new Date;
     let updatedAt = new Date;   
    const user = await db.Registro.create({
        id:'',
        encripted_name:hash,            
        createdAt:createdAt,
        updatedAt:updatedAt  
    })
    const id = user.dataValues.id;
    const encripted_name=user.dataValues.encripted_name
    return res.json({id,encripted_name})
    }
}

export default new UserController()
