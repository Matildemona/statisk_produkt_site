fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then(showCategories);

function showCategories(categories) {
  categories.forEach(showCategory);
}

function showCategory(categories) {
  //fang template
  const template = document.querySelector("#categoryTemplate").content;
  //lav kopi
  const copy = template.cloneNode(true);
  //Titel
  copy.querySelector("a h2").textContent = categories.category;
  //ÆNDRE!!
  copy.querySelector("a").setAttribute("href", `productlist.html?category=${categories.category}`);

  //Append til DOM
  document.querySelector("main").appendChild(copy);
}
