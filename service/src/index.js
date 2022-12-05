const express = require('express');
const cors = require('cors');

const { initRouters } = require("./routes");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

initRouters(app);

app.listen(port, () => {
  console.log(`App running on port ${port}`)
});

module.exports = app;
