const {
  getOrders,
  getOrdersByStatus,
} = require("../controllers/ordersController");
const {
  getRobotStatus,
  updateRobotStatus,
} = require("../controllers/robotStatusController");

const Query = () => {
  const query = {
    getOrders: () => {
      return getOrders();
    },
    getRobotStatus: () => {
      // console.log(parent);
      return getRobotStatus();
    },
    getOrdersByStatus: (parent, { status }) => {
      return getOrdersByStatus(status);
    },
  };
  return query;
};

const Mutation = () => {
  const mutation = {
    createOrder: async (parent, { order }, context, info) => {
      console.log(order);
      return order;
    },
    updateOrderStatus: async (parent, data, context, info) => {
      const {} = data;
      console.log(data);
      return { data };
    },
    updateRobotStatus: async (parent, data, context, info) => {
      const { status } = data;
      const robotStatus = await updateRobotStatus(data);
      console.log(data);
      return robotStatus;
    },
  };
  return mutation;
};

module.exports = { Mutation, Query };
