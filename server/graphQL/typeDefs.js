const OrderDefs = require("./typeDefs/orders");
const RobotDefs = require("./typeDefs/robot");

const typeDefs = () => {
  const robot = `Robot`;
  const orders = `Orders`;
  const defs = `
  ${RobotDefs(robot)} 
  ${OrderDefs(orders)}

  input OrderInput {
    order_id: String
    board_id: String
    source: LocationDetailsInput
    destination: LocationDetailsInput
    status: String
  }
  input LocationDetailsInput {
    location: String
    tray: String
    slot: String
  }
  
    
    type Query {
    getRobotStatus: [${robot}]
    getOrders: [${orders}]
    getOrdersByStatus(status: String): [${orders}]
    }
    type Mutation {
      createOrder(order: OrderInput): ${orders}
      updateOrderStatus(orderId: String, status: String): ${orders}
      updateRobotStatus(status: String): ${robot}
    }
        `;
  return defs;
};

module.exports = typeDefs;
