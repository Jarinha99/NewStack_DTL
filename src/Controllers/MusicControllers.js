const Music = require('../Models/Music');
const fs = require('fs');

module.exports = {
    async ListarMusicas(req, res) {
        const { page = 1 } = req.query;
        const musicas = await Music.paginate({ /* Wheres */}, {page, limit: 10});

        return res.json(musicas);
    },

    async ListarMusicasByEstilo(req, res) {
        const musicas = await Music.find({ 'estilo': req.params.estilo});
        
        return res.json(musicas);
    }, 

    async SelecionarMusica(req, res) {
        const music = await Music.findById(req.params.id);

        return res.json(music);
    },

    async EnviarCapaMusica(req, res) {
        console.log(req.file);

        return res.json({filename: req.file.filename});
    },

    async EnviarArquivoMusica(req, res) {
        console.log(req.file);

        return res.json({hello: "Rocket"});
    },

    async DeletarCapaMusica(req, res) {
        const id = req.params.id;

        fs.unlink(`tmp/uploads/capas/${id}`, (err) => {
            if (err) throw err;
        });

        return res.json({result: 'Capa Deletada com sucesso'})
    },

    async CriarMusica(req, res){
        const music = await Music.create(req.body);
        
        return res.json(music);
    },

    async EditarMusica(req, res){
        const music = await Music.findByIdAndUpdate(req.params.id, req.body, { new: true});

        return res.json(music);
    },

    async DeletarMusica(req, res){
        const music = await Music.findByIdAndDelete(req.params.id);

        return res.json(music);
    }
}