const express = require('express');
const router = express.Router();
const db = require('../utilities/db');

router.get('/:productId', async (req, res) => {
    const productId = req.params.productId;

    try{
        var [retrievedDataFromDb, otherFieldsFromDb] = await db.execute(`SELECT * FROM products WHERE productId = ?;`, [productId])

        if(retrievedDataFromDb.length > 0){ // The DB was able to find a match for the username and password
            const productDetails = retrievedDataFromDb[0];
            res.json({
                success: true,
                productDetails: productDetails
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