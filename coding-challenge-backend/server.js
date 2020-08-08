// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults();

server.use(middlewares);

const port = 3001;

server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running...${port}`);
});
