const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const axios = require("axios");
const { getOrder } = require("../controllers/ordersController");

const startServer = async (app) => {
  const logger = app.get("logger");
  const server = new ApolloServer({
    typeDefs: `
    type Orders {
        order_id: String
        board_id: String
        source: LocationDetails
        destination: LocationDetails
        status: String
      }
      
    type LocationDetails {
        location: String
        tray: String
        slot: String
      }
    type Query {
    getOrders: [Orders]
    }
        `,
    resolvers: {
      Query: {
        getOrders: () => {
          return getOrder();
        },
      },
    },
    // context: ({ req }) => {
    //   return {
    //     headers: req.headers,
    //   };
    // },
  });
  app.use(bodyParser.json());

  //   app.use(cors());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen({ port: 4000 }, () => {
    logger.info("Apollo Server on http://localhost:4000/graphql");
  });
};

module.exports = startServer;
