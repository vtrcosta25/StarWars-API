const axios = require('axios')
const cors = require('cors')
const express = require ('express')  // chama express
const app = express()

app.listen('4567')
app.use(cors())


// ROTAS


app.get('/', async(req, res)  => {
    
    const { data } = await axios('https://pokeapi.co/api/v2/pokemon/')
    console.log(data)

return res.json(data)
})




// app.get('/', (req, res) => {
//     return res.json({ message: 'criado rota home'})    rota front end
//     })

// server.listen(port, () => {                     // server a API
//     console.clear();
//     console.log(`Server running at http://localhost:${4567}/`);

