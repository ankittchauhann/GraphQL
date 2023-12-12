const RobotDefs = (robot) => {
  const typeDefs = `
  type ${robot} {
    status: String
    Orders: [Orders]
  } `;
  return typeDefs;
};

module.exports = RobotDefs;
