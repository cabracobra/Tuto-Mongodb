const router = require('express').Router();

router.get('/users/signin',(req,res)=> 
    { 
        res.send('notes from db');
    });

module.exports = router;