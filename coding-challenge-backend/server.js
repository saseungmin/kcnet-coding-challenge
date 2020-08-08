// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);

router.render = (req, res) => {
  if(res.locals.data.length === 0){
    res.status(404).jsonp({
      error: "Not Found"
    })
  }else{
    res.jsonp(res.locals.data);
  }
}

const port = 3001;

server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running...${port}`);
});
