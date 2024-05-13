const express = require('express')
const app = express();
const routes = require('../routes/index')
const cors = require('cors')
const PORT = process.env.PORT || 3000


app.use(express.json());

app.use(routes);
app.use(cors());









app.listen(PORT, (error) => {
    if(error){
        console.log(error)
    }

    console.log('Aplicação rodando na porta ' + PORT)
})