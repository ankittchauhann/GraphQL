const {
  getOrders,
  getOrdersByStatus,
} = require("../controllers/ordersController");
const { getRobotStatus } = require("../controllers/robotStatusController");

const Query = () => {
  const query = {
    getOrders: () => {
      return getOrders();
    },
    getRobotStatus: () => {
      return getRobotStatus();
    },
    getOrdersByStatus: (parent, { status }) => {
      return getOrdersByStatus(status);
    },
  };
  return query;
};

module.exports = Query;
