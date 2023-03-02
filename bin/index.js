"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
let crypto = require('crypto');
let restify = require('restify');
let server = restify.createServer();
let app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.get('/', function (_, res) {
    res.send('Hello World');
});
app.listen(30000, function () {
    console.log('Example app listening on port 30000!');
});
let methodsRoutes = require('./app/routes/methods.routes.ts');
methodsRoutes(server);
server.listen(30001, function () {
    console.log('%s listening at %s', server.name, server.url);
});
app.get('/setCookie/:name', function (req, res) {
    const cookie_name = req.params.name;
    let id = crypto.randomBytes(20).toString('hex');
    const actualDate = new Date(new Date().getDate() + 1);
    res.cookie(cookie_name, id, { expires: actualDate, maxAge: 5000, secure: true, httpOnly: true, sameSite: 'lax' })
        .send('Cookie is set');
});
app.get('/getCookies', function (req, res) {
    console.log("Cookies :  ", req.cookies);
    res.send(req.cookies);
});
app.get('/clearCookie/:name', function (req, res) {
    const cookie_name = req.params.name;
    res.clearCookie(cookie_name);
    res.send('Cleared cookie');
});
app.get('/timeOut/:time', function (req, res) {
    const time = Number(req.params.time);
    setTimeout(function () {
        res.send('Time out of ' + time + ' seconds');
    }, time * 1000);
});
app.get('/redirect', function (_, res) {
    res.redirect('/');
});
