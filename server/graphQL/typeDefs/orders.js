const OrderDefs = (orders) => {
  const defs = `
  type ${orders} {
    order_id: String
    board_id: String
    source: LocationDetails
    destination: LocationDetails
    status: statusEnum
    robotStatus: Robot
  }
  
  type LocationDetails {
    location: String
    tray: String
    slot: String
  }
  enum statusEnum{
    QUEUED
    PROGRESSING
    COMPLETED
    ABORTED
  }
  `;
  return defs;
};

module.exports = OrderDefs;
