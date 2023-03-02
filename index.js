var express = require('express');
var cookieParser = require('cookie-parser');
var crypto = require('crypto');

var app = express();
app.use(cookieParser());

app.get('/setCookie/:name',function(req, res){
    cookie_name= req.params.name;
    var id = crypto.randomBytes(20).toString('hex');
    res.cookie(cookie_name, id, 
            {expire : new Date() + 9999, maxAge: 5000, secure: true, httpOnly: true, sameSite: 'lax'})
        .send('Cookie is set');
});

app.get('/getCookies', function(req, res) {
    console.log("Cookies :  ", req.cookies);
    res.send(req.cookies);
});

app.get('/clearCookie/:name', function(req, res) {
    cookie_name= req.params.name;
    res.clearCookie(cookie_name);
    res.send('Cleared cookie');
});

app.listen(30000, function() {
    console.log('Example app listening on port 30000!');
});

