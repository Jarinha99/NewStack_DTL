const mongoose = require('../DataBase');
const mongoosePaginate = require('mongoose-paginate');

const MusicSchema = new mongoose.Schema({
    titulo: {
        type: String,
        require: true
    },
    estilo:{
        type: String,
        require: true
    },
    duracao: {
        type: Number,
        require: true
    },
    urlImage: {
        type: String,
        require: true
    },
    urlMusic: {
        type: String,
        require: true
    }
});

MusicSchema.plugin(mongoosePaginate);

const Music = mongoose.model("Musics", MusicSchema);

module.exports = Music;

