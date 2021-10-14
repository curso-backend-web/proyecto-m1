import http from 'http';
import app from './app.js';

const PORT = process.env.PORT || 3000;

http.createServer(app).listen(PORT);

console.log(`server running on ${PORT}`)