const Rating = require('../Models/Rating');

module.exports = {
    async ListarAvaliacoes(req, res){
        const ratings = await Rating.find();
        
        return res.json(ratings);
    },

    async InserirAvaliacao(req, res){
        const rating = await Rating.create(req.body)

        return res.json(rating);
    }
}