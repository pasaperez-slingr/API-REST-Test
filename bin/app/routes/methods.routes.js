"use strict";
function APIRest(server) {
    function respond(req, res, next) {
        res.send('hello');
        next();
    }
    server.get('/get', (_, res, next) => { res.send('GET'); next(); });
    server.post('/post', (_, res, next) => { res.send('POST'); next(); });
    server.put('/put', (_, res, next) => { res.send('PUT'); next(); });
    server.patch('/patch', (_, res, next) => { res.send('PATCH'); next(); });
    server.del('/delete', (_, res, next) => { res.send('DELETE'); next(); });
    server.head('/head', (_, res, next) => { res.send('HEAD'); next(); });
    server.opts('/options', (_, res, next) => { res.send('OPTIONS'); next(); });
}
module.exports = APIRest;
