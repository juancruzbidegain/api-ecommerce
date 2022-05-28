const express = require("express");
const app = express();
const $PORT = 8080;
const cors = require('cors');


const routerApi = require("./routes/router");
const {logErrors, errorHandler, boomErrorHandler} = require("./middlewares/error.handler")


app.use(express.json())
app.use(cors());
routerApi(app)
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)


app.listen($PORT, () => {
  console.log(`Server running on PORT: ${$PORT}`);
});
