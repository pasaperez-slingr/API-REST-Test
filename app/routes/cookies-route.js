var express = require('express');
var router = express.Router();

app.get('/cookie',function(req, res){
    req.query.cookie_name = 'cookie_value';
    res.cookie(cookie_name , 'cookie_value').send('Cookie is set');
});

module.exports = router;