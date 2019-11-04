const express = require('express');
const userRouter = require('./routers/user');

const port = process.env.PORT;
require('./db/db');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/ping", (req, res) => {
  res.send({
    msg: "Hello, World"
  });
});

app.use(express.json());
app.use(userRouter);



app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
