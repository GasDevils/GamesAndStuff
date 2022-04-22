
const express = require('express')
//const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const db = require('./queries')
const port = 5000

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
/*
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
*/
//gets all users
app.get('/api/users', db.getUsers)
//gets all games
app.get('/api/games', db.getGames)

//login
//body {name: string, password: string}
//returns user info if userName and password match
//returns empty otherwise
app.post('/api/login', db.loginUser)

//creates user with given username and password
//body {name: string, password: string}
//@returns user id if made successfully
//@returns error otherwise
app.put('/api/createUser', db.createUser)

//deletes user with given id
//body {id: int}
//@returns empty if successful
//@returns error otherwise
app.delete('/api/deleteUser', db.deleteUser)

//gets user by id
app.get('/api/user/', db.getUserById)

//adds friend to user
//body {id1: int, id2: int}
//@returns User added to friends with ID 2 if successful
//@returns error otherwise
app.put('/api/addFriend', db.addFriend)

//gets all friends of user
//body {id: int}
//@returns array of users if successful
app.get('/api/friends/', db.getFriends)

//gets all games owned by a user
app.get('/api/owns/', db.getCollection)

//gets all games on wishlist of a user
app.get('/api/wishlist/', db.getWishlist)

//removes friend (id2) from user (id1) 
app.delete('/api/removeFriend', db.removeFriend)
app.post('/api/addWishlist', db.addWishlist)
app.delete('/api/removeWishlist', db.removeWishlist)
app.post('/api/addToCollection', db.addToCollection)
app.delete('/api/removeFromCollection', db.removeFromCollection)
//gets 50 games 
app.get('/api/game/', db.getGame)
//gets 50 games with rating greater than given rating
app.get('/api/game/rating/greaterThan', db.getGameByRatingGreaterThan)
//gets 50 games with rating less than given rating
app.get('/api/game/rating/lessThan', db.getGameByRatingLessThan)
//gets 50 games with given keyword
app.get('/api/game/keyword', db.getGameKeyword)
app.get('/api/getSpecificGameType', db.getSpecificGameType)
app.get('/api/getTableTopGameInfoByID', db.getTableTopGameInfoByID)
app.get('/api/getVideoGameInfoByID', db.getVideoGameInfoByID)





app.get('/', (req, res) => res.send('this is an update'));
app.listen(port);

