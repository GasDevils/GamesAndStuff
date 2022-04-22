const Pool = require('pg-pool')
const pool = new Pool({
    user: 'Miner9er',
    host: 'localhost',
    database: 'Miner9er',
    port: 8888,
})

const getUsers = (request, response) => {
  pool.query('SELECT username, userID, dateCreated FROM gamers ORDER BY userid ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getGames = (request, response) => {
  pool.query('SELECT * FROM game', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.body.id)

  pool.query('SELECT username, userID, dateCreated FROM gamers WHERE userid = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { name, password} = request.body

  pool.query('INSERT INTO gamers (userID,username, password,dateCreated) VALUES (DEFAULT,$1, $2,DEFAULT) RETURNING USERID', [name, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.rows[0].userid}`)
  })
}

const loginUser = (request, response) => {
  const { name, password} = request.body
  pool.query('SELECT username, userID, dateCreated from gamers where username = $1 AND password = $2', [name, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const deleteUser = (request, response) => {
  const id = parseInt(request.body.id)

  pool.query('DELETE FROM gamers WHERE userid = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}


const addFriend = (request, response) => {
    const id1 = parseInt(request.body.id1)
    const id2 = parseInt(request.body.id2)

    pool.query('INSERT INTO friendswith (userid1, userid2, dateAdded) values ($1, $2, DEFAULT)', [id1, id2], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User added to friends with ID: ${id2}`)
    })
}

const removeFriend = (request, response) => {
    const id1 = parseInt(request.body.id1)
    const id2 = parseInt(request.body.id2)

    pool.query('DELETE FROM friendswith where userid1 = $1 AND userid2 = $2', [id1, id2], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted from friends ID: ${id2}`)
    })
}

const addWishlist = (request, response) => {
    const id1 = parseInt(request.body.userid)
    const gameid = parseInt(request.body.gameid)

    pool.query('INSERT INTO wishlist (userID, gameid, dateAdded) values ($1, $2,DEFAULT)', [id1, gameid], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Game added to wishlist with ID: ${id1}`)
    })
}

const removeWishlist = (request, response) => {
    const id1 = parseInt(request.body.userid)
    const gameid = parseInt(request.body.gameid)

    pool.query('DELETE FROM wishlist where userid = $1 AND gameid = $2', [id1, gameid], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Game deleted from wishlist with ID: ${gameid}`)
    })
}

const getWishlist = (request, response) => {
    const id = parseInt(request.body.id)
    pool.query('SELECT * FROM wishlist w , game g WHERE userid = $1 AND w.gameID = g.gameID', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCollection = (request, response) => {
    const id = parseInt(request.body.id)

    pool.query('SELECT * FROM owns w , game g WHERE userid = $1 AND w.gameID = g.gameID', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const addToCollection = (request, response) => {
    const id = parseInt(request.body.id)
    const gameid = parseInt(request.body.gameid)
    const numcopies = parseInt(request.body.gameid)

    pool.query('INSERT INTO owns (id, gameid, numcopies) VALUES ($1, $2, $3)', [id, gameid, numcopies], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Game added to collection with ID: ${gameid}`)
    })
}

const removeFromCollection = (request, response) => {
    const id = parseInt(request.body.id)
    const gameid = parseInt(request.body.gameid)

    pool.query('DELETE FROM owns where userid = $1 and gameid = $2', [id, gameid], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Game deleted from collection with ID: ${gameid}`)
    })
}

const getGame = (request, response) => {
    const gameid = parseInt(request.body.gameid)
    pool.query('SELECT * FROM game WHERE gameid = $1 limit 50', [gameid], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getGameByRatingLessThan = (request, response) => {
    const rating = parseInt(request.body.gameid)
    pool.query('SELECT * FROM game WHERE rating < $1 limit 50', [rating], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getGameByRatingGreaterThan = (request, response) => {
  const rating = parseInt(request.body.gameid)
  pool.query('SELECT * FROM game WHERE rating > $1 limit 50', [rating], (error, results) => {
      if (error) {
          throw error
      }
      response.status(200).json(results.rows)
  })
}

const getFriends = (request, response) => {
    const id = parseInt(request.body.id)
    pool.query('SELECT * FROM friendswith WHERE userid1 = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getGameInfoByID = (request, response) => {
    const gameid = parseInt(request.body.gameid)
    pool.query('SELECT * FROM videogame, tabletopgame where gameid = $1', [gameid], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
  }

  const getSpecificGameType = (request, response) => {
    const gameType = request.body
    pool.query('SELECT * FROM $1 limit 50', [gameType], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getGameKeyword = (request, response) => {
    const table = request.body
    const keyword = request.body
    pool.query('SELECT * FROM $1 where title like \'%$2%\' limit 50', [table, keyword], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getTableTopGameInfoByID = (request, response) => {
    const gameid = parseInt(request.body.gameid)
    pool.query('SELECT * FROM tabletopgame where gameid = $1', [gameid], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}

const getVideoGameInfoByID = (request, response) => {
  const gameid = parseInt(request.body.gameid)
  pool.query('SELECT * FROM videogame where gameid = $1', [gameid], (error, results) => {
      if (error) {
          throw error;
      }
      response.status(200).json(results.rows);
  })
}

const getVideoGameByGreaterRatingAndTag = (request, response) => {
    const rating = parseInt(request.body.gameid)
    const tag = parseInt(request.body.gameid)

    pool.query('SELECT * FROM videogame, tags where rating > $1 AND tags.tag LIKE \'%$2%\' limit 50', [rating, tag], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}

const getVideoGameByLessRatingAndTag = (request, response) => {
    const rating = parseInt(request.body.gameid)
    const tag = parseInt(request.body.gameid)

    pool.query('SELECT * FROM videogame, tags where rating < $1 AND tags.tag LIKE \'%$2%\' limit 50', [rating, tag], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}


const getTabletopGameByGreaterRatingAndTag = (request, response) => {
    const rating = parseInt(request.body.gameid)
    const tag = parseInt(request.body.gameid)

    pool.query('SELECT * FROM tabletopgame, tags where rating > $1 AND tags.tag LIKE \'%$2%\' limit 50', [rating, tag], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}

const getTabletopGameByLessRatingAndTag = (request, response) => {
    const rating = parseInt(request.body.gameid)
    const tag = parseInt(request.body.gameid)

    pool.query('SELECT * FROM tabletopgame, tags where rating < $1 AND tags.tag LIKE \'%$2%\' limit 50', [rating, tag], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}


const getVideoGameByGreaterRatingAndTitle = (request, response) => {
    const rating = parseInt(request.body.gameid)
    const title = parseInt(request.body.gameid)

    pool.query('SELECT * FROM videogame where rating > $1 AND title LIKE \'%$2%\' limit 50', [rating, title], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}

const getVideoGameByLessRatingAndTitle = (request, response) => {
    const rating = parseInt(request.body.gameid)
    const title = parseInt(request.body.gameid)

    pool.query('SELECT * FROM videogame where rating > $1 AND title LIKE \'%$2%\' limit 50', [rating, title], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}


const getTabletopGameByGreaterRatingAndTitle = (request, response) => {
    const rating = parseInt(request.body.gameid)
    const title = parseInt(request.body.gameid)

    pool.query('SELECT * FROM tabletopgame where rating > $1 AND title LIKE \'%$2%\' limit 50', [rating, title], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}

const getTabletopGameByLessRatingAndTitle = (request, response) => {
    const rating = parseInt(request.body.gameid)
    const title = parseInt(request.body.gameid)

    pool.query('SELECT * FROM tabletopgame where rating < $1 AND title LIKE \'%$2%\' limit 50', [rating, title], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}



module.exports = {
  getUsers,
  getUserById,
  createUser,
  loginUser,
  deleteUser,
  addFriend,
  removeFriend,
  addWishlist,
  removeWishlist,
  getCollection,
  addToCollection,
  removeFromCollection,
  getGame,
  getGameByRatingGreaterThan,
  getGameByRatingLessThan,
  getWishlist,
  getGames,
  getFriends,
  getGameInfoByID, 
  getSpecificGameType,
  getGameKeyword,
  getVideoGameInfoByID,
  getTableTopGameInfoByID,
  getVideoGameByGreaterRatingAndTag,
  getVideoGameByLessRatingAndTag,
  getTabletopGameByGreaterRatingAndTag,
  getTabletopGameByLessRatingAndTag,
  getVideoGameByGreaterRatingAndTitle,
  getVideoGameByLessRatingAndTitle,
  getTabletopGameByGreaterRatingAndTitle,
  getTabletopGameByLessRatingAndTitle
}