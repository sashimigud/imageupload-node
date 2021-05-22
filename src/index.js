const express = require('express');
const initRoutes = require("./routes/routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 6695;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});