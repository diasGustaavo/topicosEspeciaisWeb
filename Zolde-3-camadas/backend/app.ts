const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require("dotenv/config")

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err: any) => console.error('Erro ao conectar ao MongoDB:', err));

const app = express()

app.use(bodyParser.json())

app.get("/", (req: any, res: any) => {
    res.send("Hello World")
})

app.listen(3000)