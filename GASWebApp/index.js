
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
//body {gameid:int}
//returns info where gameID = gameID
app.post('/api/getGameInfoByID', db.getGameInfoByID)
//gets all users
//empty body
//returns all users in Gamers relation
app.post('/api/users', db.getUsers)

//gets all games
//empty body
//returns all games in Game relation
app.post('/api/games', db.getGames)

//login
//body {username: string, password: string}
//returns user(s) info if userName and password match
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
//body {id: int}
//@returns username, userid, dateCreated of user with id if successful
//@returns error otherwise
app.post('/api/user', db.getUserById)

//adds friend to user
//body {id1: int, id2: int}
//@returns User added to friends with ID 2 if successful
//@returns error otherwise
app.put('/api/addFriend', db.addFriend)

//gets all friends of user
//body {id: int}
//@returns array of users if successful
app.post('/api/friends', db.getFriends)

//gets all games owned by a user
app.post('/api/owns', db.getCollection)

//gets all games on wishlist of a user
//body {id: int}
//@returns array of games if successful
//@returns error otherwise
app.post('/api/wishlist', db.getWishlist)

//removes friend (id2) from user (id1) 
//body {id1: int, id2: int}
//@returns User removed from friends with ID 2 if successful
//@returns error otherwise
app.delete('/api/removeFriend', db.removeFriend)

//adds game to user's wishlist
//body {userid: int, gameid: int}
//@returns id of userID if successful
//@returns error otherwise
app.post('/api/addWishlist', db.addWishlist)

//removes game from user's wishlist
//body {userid: int, gameid: int}
//@returns id of userID if successful
//@returns error otherwise
app.delete('/api/removeWishlist', db.removeWishlist)

//adds game from user's collection
//body {userid: int, gameid: int, numcopies: int}
//@returns gameid of game if successful
app.post('/api/addToCollection', db.addToCollection)

//removes game from user's collection
//body {userid: int, gameid: int}
//@returns gameid of game if successful
app.delete('/api/removeFromCollection', db.removeFromCollection)

//gets 50 games 
app.post('/api/game/', db.getGame)

//gets 50 games with rating greater than given rating
app.post('/api/game/rating/greaterThan', db.getGameByRatingGreaterThan)

//gets 50 games with rating less than given rating
app.post('/api/game/rating/lessThan', db.getGameByRatingLessThan)

//gets 50 games with given keyword
app.post('/api/game/keyword', db.getGameKeyword)

//gets 50 games with given game type
//body {gameType: string}
//returns array of games of given type if successful
app.post('/api/getSpecificGameType', db.getSpecificGameType)

//gets the game info if its a board game
//body {gameid: int}
app.post('/api/getTableTopGameInfoByID', db.getTableTopGameInfoByID)

//gets the game info if its a video game
//body {gameid: int}
app.post('/api/getVideoGameInfoByID', db.getVideoGameInfoByID)

//gets the video games game info where its greater than given rating and with given tags
//body {rating: int, tag: string}
app.post('/api/getVideoGameByGreaterRatingAndTag', db.getVideoGameByGreaterRatingAndTag)

//gets the video games game info where its less than given rating and with given tags
//body {rating: int, tag: string}
app.post('/api/getVideoGameByLessRatingAndTag', db.getVideoGameByLessRatingAndTag)

//gets the video games game info where its greater than given rating and with given tags
//body {rating: int, tag: string}
app.post('/api/getTabletopGameByGreaterRatingAndTag', db.getTabletopGameByGreaterRatingAndTag)

//gets the video games game info where its less than given rating and with given tags
//body {rating: int, tag: string}
app.post('/api/getTabletopGameByLessRatingAndTag', db.getTabletopGameByLessRatingAndTag)

//body {rating: int, title: string}
app.post('/api/getVideoGameByGreaterRatingAndTitle', db.getVideoGameByGreaterRatingAndTitle)

//body {rating: int, title: string}
app.post('/api/getVideoGameByLessRatingAndTitle', db.getVideoGameByLessRatingAndTitle)

//body {rating: int, title: string}
app.post('/api/getTabletopGameByGreaterRatingAndTitle', db.getTabletopGameByGreaterRatingAndTitle)

//body {rating: int, title: string}
app.post('/api/getTabletopGameByLessRatingAndTitle', db.getTabletopGameByLessRatingAndTitle)

//body {rating: int, tag: string, title: string}
app.post('/api/getTabletopGameByGreaterRatingTagAndTitle', db.getTabletopGameByGreaterRatingTagAndTitle)

//body {rating: int, tag: string, title: string}
app.post('/api/getTabletopGameByLessRatingAndTag', db.getTabletopGameByLessRatingAndTag)

//body {rating: int, tag: string, title: string}
app.post('/api/getTabletopGameByLessRatingTagAndTitle', db.getTabletopGameByLessRatingTagAndTitle)

//body {rating: int, tag: string, title: string}
app.post('/api/getVideoGameByGreaterRatingTagAndTitle', db.getVideoGameByGreaterRatingTagAndTitle)

//body {rating: int, tag: string, title: string}
app.post('/api/getVideoGameByLessRatingTagAndTitle', db.getVideoGameByLessRatingTagAndTitle)

//body {userid:int}
app.post('/api/getCollectionCount', db.getCollectionCount)

//body {userid:int}
app.post('/api/getFriendCount', db.getFriendCount)

//body {userid:int}
app.post('/api/getWishListCount', db.getWishListCount)

//body {userid:int}
//returns name, userID and dateAdded of all friends of user with param userID
app.post('/api/getFriendUserInfo', db.getFriendUserInfo)

//body {username: string}
//returns name, userID and dateAdded of user with param username
app.post('/api/getUserInfoByUsername', db.getUserInfoByUsername)

//body {username: string}
//returns name, userID and dateAdded of users whose usernames is like param username
app.post('/api/userSearchByUsername', db.userSearchByUsername)

app.get('/', (req, res) => res.send('this is an update'));
app.listen(port);

