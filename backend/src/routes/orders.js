const express = require('express');
const router = express.Router();
const db = require('../utilities/db');

router.get('/', async (req, res) => {
    const userId = req.query.userId;
    console.log(userId);

    try{
        var [retrievedDataFromDb, otherFieldsFromDb] = await db.execute(`SELECT * FROM orders LEFT JOIN products ON orders.productId = products.productId WHERE userId = ?`, [userId])

        if(retrievedDataFromDb.length > 0){ // The DB was able to find a match for the username and password
            const orders = retrievedDataFromDb;

            res.json({
                success: true,
                orders: orders
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