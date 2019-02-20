const express = require('express');
const routes = express.Router();

const MusicController = require('./Controllers/MusicControllers');
const RatingController = require('./Controllers/RatingController');


// Musicas
routes.get("/Musicas", MusicController.ListarMusicas);
routes.get("/Musica/:id", MusicController.SelecionarMusica);
routes.get("/Musicas/Estilos/:estilo", MusicController.ListarMusicasByEstilo);
routes.post("/CriarMusica", MusicController.CriarMusica);
routes.delete("/DeletarMusica/:id", MusicController.DeletarMusica);
routes.put("/EditarMusica/:id", MusicController.EditarMusica);

// Rating
routes.get("/Ratings", RatingController.ListarAvaliacoes);
routes.post("/Rating", RatingController.InserirAvaliacao);

module.exports = routes;