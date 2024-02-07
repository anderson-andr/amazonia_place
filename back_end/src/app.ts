
import express from 'express';

import { AppDataSource } from "./data-source"


AppDataSource.initialize().then(async () => {
    console.log("iniciando banco de dados")
}).catch(error => console.log(error));



import rotaStore from '../routes/store'

import rotaUser from '../routes/user'


const app = express();
const port = 3000;



app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/api/store', rotaStore);

app.use('/api/user', rotaUser);

app.listen(port, () => {
  console.log("Iniciando na porta "+port);
})


  
