const {
  scanItem,
  basket,
  addItemToBasket,
  getBasketTotal,
  removeItemFromBasket
} = require("../src/basket");

const orange = {
  barcode: 789,
  price: 7,
};

const pineapple = {
  barcode: 5367,
  price: 80,
};

describe("Shopping Basket", () => {
  afterEach(() => {
      // empty shopping basket after each test
    basket.splice(0, basket.length);
  });

  it("should return product details when shopper scans the barcode", () => {
    const foundProduct = scanItem(789); // 789 - orange
    expect(foundProduct).toEqual(orange);
  });

  it("should add the item to the basket", () => {
    expect(basket).toEqual([]);
    addItemToBasket(orange);
    expect(basket).toContain(orange);
  });

  it("should calculate basket total", () => {
    addItemToBasket(pineapple);
    addItemToBasket(pineapple);
    const total = getBasketTotal();
    expect(total).toBe(160);
  });

  it("should calculate basket total", () => {
    addItemToBasket(pineapple);
    addItemToBasket(orange);

    removeItemFromBasket(pineapple);

    expect(basket).toContain(orange);
    expect(basket).not.toContain(pineapple);
  });
});
