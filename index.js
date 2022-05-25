const express = require("express");
const app = express();
const $PORT = 8080;

const routerApi = require("./routes/router");
const {logErrors, errorHandler} = require("./middlewares/error.handler")


app.use(express.json())
routerApi(app)
app.use(logErrors)
app.use(errorHandler)


app.listen($PORT, () => {
  console.log(`Server running on PORT: ${$PORT}`);
});
