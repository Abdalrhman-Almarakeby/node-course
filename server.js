require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./app");

const dbURI = process.env.DB_URI;
const port = process.env.PORT || 3000;

function connect() {
  mongoose
    .connect(dbURI)
    .then(() => {
      app.listen(port, () => {
        console.log(`App listening on port ${port}!`);
      });
    })
    .catch((err) => console.log(err));
}

connect();
