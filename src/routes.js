const routes = require('express').Router();
const multer = require('multer');
const imgConfig = require('./config/imgConfig');
const musicConfig = require('./config/imgConfig');

const MusicController = require('./Controllers/MusicControllers');
const RatingController = require('./Controllers/RatingController');

// Musicas
routes.get("/Musicas", MusicController.ListarMusicas);
routes.get("/Musica/:id", MusicController.SelecionarMusica);
routes.get("/Musicas/Estilos/:estilo", MusicController.ListarMusicasByEstilo);
routes.post("/CriarMusica", MusicController.CriarMusica);
routes.delete("/DeletarMusica/:id", MusicController.DeletarMusica);
routes.put("/EditarMusica/:id", MusicController.EditarMusica);

//Capa da Música
routes.post("/CapaMusica", multer(imgConfig).single('file'), MusicController.EnviarCapaMusica);
routes.delete("/CapaMusica/:id", MusicController.DeletarCapaMusica);

routes.post("/EnviarArquivoMusica", multer(musicConfig).single('file'), MusicController.EnviarArquivoMusica);


// Rating
routes.get("/Ratings", RatingController.ListarAvaliacoes);
routes.post("/Rating", RatingController.InserirAvaliacao);

module.exports = routes;