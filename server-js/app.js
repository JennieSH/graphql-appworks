const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

// connect to database
mongoose.connect(
  `mongodb+srv://school:${process.env.DB_PASSWORD}@school-graphql.gggym.mongodb.net/?retryWrites=true&w=majority`
);

mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

app.use(cors());
// endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("listening for requests fon port 4000");
});
