//Carregando módulos
const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const app = express();
const admin = require("./routes/admin");
const path = require("path");

//Configurações
    //Parser
    app.use(express.urlencoded());
    app.use(express.json());
    //Handlebars
    app.engine('handlebars', handlebars({
        defaultLayout: 'main',
        // Precisa adicionar isso para dar permissão para o handlebars acessar isso
        runtimeOptions:{
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        }
    }));
    app.set('view engine', 'handlebars');
    //Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/blogapp",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Conectado ao MongoDB!");
    }).catch((erro)=>{
        console.log("Erro "+erro+" ao conectar ao MongoDB!");
    });

    //Public
    app.use(express.static(path.join(__dirname, "public")));

        //Exemplo de middleware
        app.use((req,res,next)=>{
            console.log("Aqui está o middleware")
            //Deixa a requisição prosseguir
            next()
        })

//Rotas
//http://localhost:8081/admin/(rota)
app.use("/admin", admin)

//Outros
const PORT = 8081;
app.listen(PORT, function(){
    console.log("Servidor rodando");
    //http://localhost:8081/
});

