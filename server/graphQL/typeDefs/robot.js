const RobotDefs = (robot) => {
  const typeDefs = `
  type ${robot} {
    status: String
  } `;
  return typeDefs;
};

module.exports = RobotDefs;
