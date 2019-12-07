import http from 'http'
import express from 'express'

import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './server/routes';

const hostname = '127.0.0.1';
const port = 3000;
const app = express()
const server = http.createServer(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.get('*', (req, res) => res.status(200).send({
    message: 'Kanban App',
}));

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});