import express from 'express';
import {buscarUfs, buscarUfPorId, buscarUfsPorNome} from './servicos/servico.js';

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();
    if(resultado.length > 0) {
        res.json(resultado);
    } else{
        res.status(404).send({"erro":"Nenhuma UF encontrada"})
    }
});

app.get('/ufs/:iduf', (req, res) => {
    const iduf = buscarUfPorId(req.params.iduf)

    if(uf) {
        res.json(uf);
    } else if (isNaN(parseInt(req.params.iduf))) {
        res.status(400).json({"erro":"Requisição Inválida"});
    } else {
        res.status(404).json({"erro":"Uf não encontrada"});
    }
});

app.listen(8080, () =>{
    console.log('Servidor iniciado na porta 8080');
});