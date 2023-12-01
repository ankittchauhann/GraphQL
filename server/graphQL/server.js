const { ApolloServer } = require("@apollo/server");
const typeDefs = require("./typeDefs");
const express = require("express");
const Query = require("./resolvers");
const { getRobotStatus } = require("../controllers/robotStatusController");

const server = new ApolloServer({
  typeDefs: typeDefs(),
  resolvers: {
    Orders: {
      robotStatus: async () => {
        // getRobotStatus();
        const robotStatus = await getRobotStatus();
        console.log(robotStatus[0].status);
        return robotStatus[0];
      },
    },
    Query: Query(),
  },
  // context: ({ req }) => {
  //   return {
  //     headers: req.headers,
  //   };
  // },
});

module.exports = {
  server,
};
