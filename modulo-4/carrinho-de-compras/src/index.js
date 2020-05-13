const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {
  let totalPrice = 0;
  let regularPrice = 0;

  let products = ids.map((idProduct) => productsList.filter(({ id }) => id === idProduct)[0]);

  let promotion = products.reduce(
    (acc, product) => (acc.includes(product.category) ? acc : [...acc, product.category]),
    []
  ).length;
  promotion = promotions[promotion - 1];

  products.forEach((product) => {
    let promotionPrice = product.promotions.filter((productPromotion) =>
      productPromotion.looks.includes(promotion)
    )[0];
    regularPrice += product.regularPrice;
    totalPrice += promotionPrice ? promotionPrice.price : product.regularPrice;
  });

  products = products.map(({ name, category }) => ({ name, category }));
  totalPrice = totalPrice.toFixed(2);
  const discountValue = parseInt(regularPrice - totalPrice).toFixed(2);
  const discount = `${(100 - (totalPrice / regularPrice) * 100).toFixed(2)}%`;


  return {
    products,
    promotion,
    totalPrice,
    discountValue,
    discount,
  };
}

module.exports = { getShoppingCart };