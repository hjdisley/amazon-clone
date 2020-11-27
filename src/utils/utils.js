const sumOfItems = (basket) => {
  return basket.reduce((amount, item) => item.price + amount, 0);
};

module.exports = { sumOfItems };
