const express = require('express');
const router = express.Router();
const db = require('../utilities/db');

router.post('/', async (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    console.log(password);

    try{
        var [retrievedDataFromDb, otherFieldsFromDb] = await db.execute(`SELECT * FROM users WHERE username=? AND password=?;`, [username, password])

        if(retrievedDataFromDb.length > 0){ // The DB was able to find a match for the username and password
            res.send("Hello, " + retrievedDataFromDb[0]['name']);
        }
        else{
            res.send("Incorrect username or password. Please try again!")
        }
        
    }
    catch(error){
        console.log(error);
    }
});

module.exports = router;