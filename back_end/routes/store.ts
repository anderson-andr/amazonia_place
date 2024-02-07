import { Router } from 'express';
import { StoreController} from '../controller/store';

const rota = Router();
const controller = new StoreController();

//Rota: /api/user
rota.get('/', controller.listar);
rota.post('/', controller.inserir);
rota.delete('/:id', controller.delete);
rota.put('/:id', controller.update);
rota.get('/:id', controller.buscarPorId);

export default rota;