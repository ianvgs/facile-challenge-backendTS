import db  from '../models/index';
import { Request, Response } from 'express'
import cryptr from'cryptr';
const crypt:any = new cryptr('facile');


class UserController {
    public async index (req: Request, res: Response): Promise<Response> {        
        console.log(req.params)
        if (!req.params.id) {
            return res.status(200).json({message: "Informe um ID via params para realizar a consulta."})
        }
        let reg = req.params.id;
        try {        
            
            const resultados = await db.Registro.findOne({where:{
                id:reg
            }});
            if (!resultados){
                return res.status(200).json({message:'Não foi encontrado registro com o id informado.'})    
            }    
            let encripted_name = await crypt.decrypt(resultados.dataValues.encripted_name) 
            let id = (resultados.dataValues.id)    
            return res.status(200).json({id,encripted_name})
        } catch (e) {
            return res.json({message:"Houve erro na requisição, verifique se foi informado o Id para busca."})
        }       
    }

    public async store (req: Request, res: Response): Promise<Response> {

        console.log(req.body)
        if (!req.body.name) {
            return res.status(200).json({code:"E_VALIDATION_FAILURE", message: "O campo \"name\"é obrigatório."})
        }   
        
        
        let reg:any = req.body.name;

        

        if (typeof reg === 'string'){
            
            let hash:string = await crypt.encrypt(req.body.name);     
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

        return res.json({message:"O parâmetro informado não é uma string, por favor informe uma string."})


    }
        



     
}

export default new UserController()
