// Problem-1 starts here.

function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount > 100 ||
    discount < 0
  ) {
    return "Invalid";
  }

  const discountPrice = currentPrice - (currentPrice * discount) / 100;
  return discountPrice.toFixed(3);
}

// const test = newPrice(1500, 20);
// console.log(test);
