// Placing order using COD method
const placeOrder = async (req, res) => {};

// Placing order using Paypal method
const placeOrderPaypal = async (req, res) => {};

// Placing order using Stripe method
const placeOrderStripe = async (req, res) => {};

// All Orders data for Admin Panel
const allOrders = async (req, res) => {};

// User Order Data for Frontend
const userOrders = async (req, res) => {};

// Update order Status (Admin only)
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderPaypal,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
};
