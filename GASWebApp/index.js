
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
app.post('/users', db.getUsers)
app.post('/games', db.getGames)
// app.post('/users/getById', db.getUserById)
// app.post('/users/create/', db.createUser)
// app.post('/users/delete', db.deleteUser)
// app.post('/users/login', db.loginUser)
// app.post('/friends/add', db.addFriend)
// app.post('/friends/remove', db.removeFriend)
// app.post('/friends/get', db.getFriends)

//app.get('/users/:id', db.getUserById)
//app.post('/users', db.createUser)
//app.put('/users/:id', db.updateUser)
//app.delete('/users/:id', db.deleteUser)


app.get('/', (req, res) => res.send('this is an update'));
app.listen(port);

