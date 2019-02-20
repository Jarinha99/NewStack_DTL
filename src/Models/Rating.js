const mongoose = require('../DataBase');   

const RatingSchema = new mongoose.Schema({
    idMusica: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        require: true
    },
    createdAt: {
        type: Date,
        dafault: Date.now
    }
});

const Rating = mongoose.model("Rating", RatingSchema);

module.exports = Rating;