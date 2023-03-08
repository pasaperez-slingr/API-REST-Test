import express from 'express';
import cookieParser from 'cookie-parser';
import { properties } from "./app/routes/properties.routes";
import { APIRest } from './app/routes/methods.routes';
import { redirectOut } from './app/routes/redirects.routes';
let restify = require('restify');
let server = restify.createServer();
let app = express();


app.use(cookieParser());
app.get('/',function(_, res){
    res.send('Hello World');
});
properties(app);
app.listen(30000, function() {
    console.log('Example app listening on port 30000');
});


server= APIRest(server);
server= redirectOut(server);
server.listen(30001, function() {
    console.log('%s listening at %s', server.name, server.url);
});