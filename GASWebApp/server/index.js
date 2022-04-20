
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

// middleware
app.use(cors());
app.use(express.json());
/*
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
*/
app.get('/users', db.getUsers)
app.get('/games', db.getAllGames)
//app.get('/users/:id', db.getUserById)
//app.post('/users', db.createUser)
//app.put('/users/:id', db.updateUser)
//app.delete('/users/:id', db.deleteUser)


app.get('/', (req, res) => res.send('this is an update'));
app.listen(port);

