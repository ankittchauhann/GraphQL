const OrderDefs = require("./typeDefs/orders");
const RobotDefs = require("./typeDefs/robot");

const typeDefs = () => {
  const robot = `Robot`;
  const orders = `Orders`;
  const defs = `
  ${RobotDefs(robot)} 
  ${OrderDefs(orders)}
    
    type Query {
    getRobotStatus: [${robot}]
    getOrders: [${orders}]
    getOrdersByStatus(status: String): [${orders}]
    }
        `;
  return defs;
};

module.exports = typeDefs;
