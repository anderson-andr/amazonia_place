import { Request, Response } from "express";

import { AppDataSource } from "../src/data-source";
import { User } from "../src/entities/User";


export class UserController {
    async listar(req: Request, res: Response) {
      const datasource     = await AppDataSource;
      const userRepository = datasource.getRepository(User);
      const listaUsuarios  = await userRepository.find();
      res.json(listaUsuarios);
    }
  
    async inserir(req: Request, res: any) {
      const userRequest = req.body;
  
      if (
        !userRequest ||
        !userRequest.name ||
        !userRequest.email||
        !userRequest.password||
        !userRequest.type ||
        !userRequest.dt_created||
        !userRequest.dt_updated ||
        !userRequest.id_store

      ) {
        return res.status(400).json({
          Erro: "Todos os dados são Obrigatórios",
        });
      }
  
      const user = new User();
      user.name       = userRequest.name;
      user.email      = userRequest.email;
      user.password   = userRequest.password;
      user.type       = userRequest.type;
      user.dt_created = userRequest.dt_created;
      user.dt_updated = userRequest.dt_updated;
      user.id_store   = userRequest.id_store;

  
      const datasource     = await AppDataSource;
  
      const userRepository = datasource.getRepository(User);
      const userSalve      = await userRepository.save(User);
      res.status(201).json(userSalve);
    }
  
    async delete(req: any, res: any) {
      const datasource = await AppDataSource;
      const userRepository = datasource.getRepository(User);
  
      const id = req.params.id;
      const user = await userRepository.findOneBy({ id: id });
      await userRepository.delete({ id: id });
      res.status(201).json({ User_delete: user });
    }
    async update(req: any, res: any) {
      const datasource     = await AppDataSource;
      const userRepository = datasource.getRepository(User);
  
      const id = req.params.id;
      const userRequest= req.body;
      if (
        !userRequest ||
        !userRequest.name ||
        !userRequest.email||
        !userRequest.password||
        !userRequest.type ||
        !userRequest.dt_created||
        !userRequest.dt_updated ||
        !userRequest.id_store
  
      ) {
        return res.status(400).json({
          Erro: "Todos os dados são obrigatorios",
        });
      }
      await userRepository.update(id, {
        name       : userRequest.name,
        email      : userRequest.description,
        password   :  userRequest.password,
        type       :  userRequest.type,
        dt_created :  userRequest.dt_created,
        dt_updated :  userRequest.dt_updated,
        id_store   :  userRequest.id_store,
        
      });
      const user = await userRepository.findOneBy({ id: id });
      res.status(201).json(user);
    }
  
    async buscarPorId(req: any, res: any) {
      const datasource     = await AppDataSource;
      const userRepository = datasource.getRepository(User);
  
      const id = req.params.id;
  
      const user = await userRepository.findOneBy({ id: id });
  
      res.json(user);
    }
  
   
  }
  