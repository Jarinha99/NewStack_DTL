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
    ImageKey: {
        type: String,
        require: true
    },
    MusicKey: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

MusicSchema.plugin(mongoosePaginate);

const Music = mongoose.model("Musics", MusicSchema);

module.exports = Music;

