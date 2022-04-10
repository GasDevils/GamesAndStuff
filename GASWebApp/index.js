
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/users', db.getUsers)
//app.get('/users/:id', db.getUserById)
//app.post('/users', db.createUser)
//app.put('/users/:id', db.updateUser)
//app.delete('/users/:id', db.deleteUser)


app.get('/', (req, res) => res.send('this is an update'));
app.listen(port);

<html>
    <head>
        <title>G.A.S.</title>
        <link rel="stylesheet" href="style.css"></link>
    </head>
    <body>
        <div class="main">
            
        </div>
    </body>
</html>