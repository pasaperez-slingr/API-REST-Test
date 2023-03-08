import { Express } from "express-serve-static-core";

let crypto = require('crypto');

export function properties (app: Express) {
    
    app.get('/setCookie/:name',function(req, res){
        const cookie_name= req.params.name;
        let id = crypto.randomBytes(20).toString('hex');
        const actualDate = new Date(new Date().getDate()+1);
        res.cookie(cookie_name, id, 
                {expires: actualDate, maxAge: 5000, secure: true, httpOnly: true, sameSite: 'lax'})
            .send('Cookie is set');
    });
    
    app.get('/getCookies', function(req, res) {
        console.log("Cookies :  ", req.cookies);
        res.send(req.cookies);
    });
    
    app.get('/clearCookie/:name', function(req, res) {
        const cookie_name= req.params.name;
        res.clearCookie(cookie_name);
        res.send('Cleared cookie');
    });
    
    app.get('/timeOut/:time', function(req, res) {
        const time: number= Number(req.params.time);
        setTimeout(function() {
            res.send('Time out of ' + time + ' seconds');
        }, time * 1000);
    });
    
    app.get('/redirect',function(_: any, res){
        res.redirect('/');
    });

    app.get('/redirectInfinite',function(_: any, res){
        setTimeout(function() {
            res.redirect('/redirectInfinite');
        }, 1000);
    });

    app.get('/redirectOut', function(req, res){
        res.send("Redirected 1 time");
    });

    app.post('/redirectPost', function(_, res){
        res.status(200).send("Redirected For Post");
    });

    app.get('/redirectPost', function(_, res){
        res.status(404).send("Redirected For Post 404 ERROR");
    });

    app.get('/redirect2', function(req, res){
        console.log(req.headers.referer);
        res.redirect('http://localhost:30001/redirect3');
    });

    app.get('/redirectFinal', function(req, res){
        console.log(req.headers.referer);
        res.redirect('http://localhost:30001/methodFinal');
    });

    return app;
}