const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const { server } = require("../graphQL/server");

const startServer = async (app) => {
  const logger = app.get("logger");

  app.use(bodyParser.json());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen({ port: 4000 }, () => {
    logger.info("Apollo Server started on http://localhost:4000/graphql");
  });
};

module.exports = startServer;
