const { deserialize } = require("bson")
const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Categoria")
const Categoria = mongoose.model("categorias")

router.get("/", (req,res)=>{
    res.render("admin/index")
})

router.get("/posts", (req,res)=>{
    res.render("admin/posts")
})

router.get("/categorias", (req,res)=>{
    res.render("admin/categorias")
})

router.get("/categorias/add", (req,res)=>{
    res.render("admin/addCategoria")
})

router.post("/categorias/nova", (req,res)=>{
    const novaCategoria = {
        nome: req.body.nome,
        descricao: req.body.descricao,
        criador: req.body.descricao,
        email: req.body.email
    }
    new Categoria(novaCategoria).save().then(()=>{
        console.log("Cadastrado com sucesso!")
    }).catch((erro)=>{
        console.log("Deu o erro "+erro)
    })
})

module.exports = router