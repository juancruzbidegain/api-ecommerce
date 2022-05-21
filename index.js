const express = require("express");
const app = express();

const routerApi = require("./routes/router");
const $PORT = 8080;

routerApi(app)

app.listen($PORT, () => {
  console.log(`Server running on PORT: ${$PORT}`);
});
