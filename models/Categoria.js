const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Categoria = new Schema({
    nome:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    criador:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})

mongoose.model("categorias", Categoria)

