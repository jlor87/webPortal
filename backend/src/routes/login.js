const express = require('express');
const router = express.Router();
const db = require('../utilities/db');
const { check, validationResult } = require('express-validator');

router.post('/',
    
    // Middleware to sanitize username and password fields from the user
    check('username')
        .trim() // Remove spaces
        .not().isEmpty() // Cannot be empty
        .escape(), // Prevents injections
    check('password')
        .trim()
        .not().isEmpty() 
        .escape(),

    async (req, res) => {

    // Validating the user input
    const errors = validationResult(req);
    if (!errors.isEmpty()){ // If an error is found, "errors" will not be empty
        return res.status(400).json({ errors: errors.array() }); // Show the error messages to user
    }

    // Else, continue onward with logging in the user
    var { username, password} = req.body;

    try{
        var [retrievedDataFromDb, otherFieldsFromDb] = await db.execute(`SELECT * FROM users WHERE username=? AND password=?;`, [username, password])

        if(retrievedDataFromDb.length > 0){ // The DB was able to find a match for the username and password
            const user = retrievedDataFromDb[0];
            req.session.userId = user.userId;
            req.session.name = user.name;
            res.json({
                success: true,
                name: user.name,
                userId: user.userId
            });
        }
        else{
            res.json({success: false});
        }
        
    }
    catch(error){
        console.log(error);
    }
});

module.exports = router;