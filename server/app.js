const express = require("express");
require("dotenv").config();
const app = express();
const { ApolloServer, gql } = require("apollo-server-express");
const fs = require("fs");


const typeDefs = gql( fs.readFileSync("./schema.graphql", { encoding: "utf-8" }) );
const resolvers = require("./resolvers");
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: "/graphql" });


app.get("/", (req, res) => {
  res.json({
    data: "FETCHING DATA...",
  });
});

const PORT = 600;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});


