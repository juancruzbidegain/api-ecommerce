const express = require("express");
const app = express();
const $PORT = 8080;

const routerApi = require("./routes/router");

app.use(express.json())

routerApi(app)

app.listen($PORT, () => {
  console.log(`Server running on PORT: ${$PORT}`);
});
