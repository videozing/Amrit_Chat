let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let stream = require('./ws/stream');
let path = require('path');

_favicon(req, res, function onNext (err) {
    if (err) return done(err)
 
    // continue to process the request here, etc.
 
    res.statusCode = 404
    res.end('oops')
app.use('/src/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/src/index.html');
});


io.of('/stream').on('connection', stream);

server.listen(3000);
