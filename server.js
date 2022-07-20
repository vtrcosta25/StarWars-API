const axios = require('axios')
const cors = require('cors')
const express = require ('express')  
const app = express()

//app.listen('4567')
//app.use(cors())


// ROTAS

async function doGetRequest(url) {

  let res = await axios.get(url);

  let data = res.data;

  var name = data.name;
  var rotation = data.rotation_period;
  console.log(data);
  console.log(rotation);

}

doGetRequest('https://swapi.dev/api/starships/12/');
doGetRequest('https://swapi.dev/api/people/2/');




/*
app.get('/', async(req, res)  => {
    
    const { data } = await axios('https://jsonplaceholder.typicode.com/posts')
    console.log(data)

return res.json(data)
})
*/




// app.get('/', (req, res) => {
//     return res.json({ message: 'criado rota home'})    rota front end
//     })

// server.listen(port, () => {                     // server a API
//     console.clear();
//     console.log(`Server running at http://localhost:${4567}/`);

''