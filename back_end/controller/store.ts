import { Request, Response } from "express";

import { AppDataSource } from "../src/data-source";
import { Store } from "../src/entities/Store";


export class StoreController {
    async listar(req: Request, res: Response) {
      const datasource = await AppDataSource;
      const storeRepository = datasource.getRepository(Store);
      const listaStores = await storeRepository.find();
      res.json(listaStores);
    }
  
    async inserir(req: Request, res: any) {
      const storeRequest = req.body;
  
      if (
        !storeRequest ||
        !storeRequest.name ||
        !storeRequest.description
      ) {
        return res.status(400).json({
          Erro: "Todos os dados são Obrigatórios",
        });
      }
  
      const store = new Store();
      store.name = storeRequest.name;
      store.description = storeRequest.description

  
      const datasource = await AppDataSource;
  
      const storeRepository = datasource.getRepository(Store);
      const storeSalva = await storeRepository.save(store);
      res.status(201).json(storeSalva);
    }
  
    async delete(req: any, res: any) {
      const datasource = await AppDataSource;
      const storeRepository = datasource.getRepository(Store);
  
      const id = req.params.id;
      const store = await storeRepository.findOneBy({ id: id });
      await storeRepository.delete({ id: id });
      res.status(201).json({ Store_Deletada: store });
    }
    async update(req: any, res: any) {
      const datasource = await AppDataSource;
      const storeRepository = datasource.getRepository(Store);
  
      const id = req.params.id;
      const storeRequest= req.body;
      if (
        !storeRequest ||
        !storeRequest.name ||
        !storeRequest.description
  
      ) {
        return res.status(400).json({
          Erro: "Todos os dados são obrigatorios",
        });
      }
      await storeRepository.update(id, {
        name: storeRequest.name,
        description: storeRequest.description
        
      });
      const store = await storeRepository.findOneBy({ id: id });
      res.status(201).json(store);
    }
  
    async buscarPorId(req: any, res: any) {
      const datasource = await AppDataSource;
      const storeRepository = datasource.getRepository(Store);
  
      const id = req.params.id;
  
      const store = await storeRepository.findOneBy({ id: id });
  
      res.json(store);
    }
  
   
  }
  