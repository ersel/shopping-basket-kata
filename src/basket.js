const catalogue = require("./supermarketCatalogue");

const basket = [];

const scanItem = (scannedBarcode) => {
  return catalogue.find((product) => product.barcode === scannedBarcode);
};

const addItemToBasket = (itemToAdd) => {
    basket.push(itemToAdd);
}

const getBasketTotal = () => {
    const pricesOfAllItemsInBasket = basket.map(item => item.price);
    const sum = pricesOfAllItemsInBasket.reduce((a, b) => a + b, 0);
    return sum;
}

const removeItemFromBasket = (itemToDelete) => {
    /// what is the index for itemToDelete?
    const indexToDelete = basket.indexOf(itemToDelete);
    basket.splice(indexToDelete, 1);
}

module.exports = {
  scanItem,
  addItemToBasket,
  basket,
  getBasketTotal,
  removeItemFromBasket
};
