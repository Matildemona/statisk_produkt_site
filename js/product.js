//https://kea-alt-del.dk/t7/api/products/1525
fetch("https://kea-alt-del.dk/t7/api/products/1525")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".lineuptext h1").textContent = product.productdisplayname;
  document.querySelector(".lineuptext .brand").textContent = product.brandname;
  document.querySelector(".lineuptext .productCategory").textContent = product.category;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
